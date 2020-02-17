import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap, withLatestFrom, take } from 'rxjs/operators';
import { of } from 'rxjs';
import * as FuncionariosActions from './funcionarios.actions';
import { FuncionariosService } from '../services/funcionarios.service';
import { Store, select } from '@ngrx/store';
import { FuncionariosState } from './funcionarios.reducer';
import { getFuncionarioByEmail } from './funcionarios.selectors';
import * as MensagensActions from 'src/app/shared/store/mensagens/mensagens.action';
import { getUsuario } from 'src/app/seguranca/store/seguranca.selectors';

@Injectable()
export class FuncionariosEffects {
	constructor(
		private actions$: Actions,
		private funcionariosService: FuncionariosService,
		private store: Store<FuncionariosState>
	) {}

	// Efeito responsável por obter a lista de funcionários
	// ----------------------------------------------------
	getFuncionarios$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FuncionariosActions.getFuncionarios),
			switchMap(() =>
				this.funcionariosService.getFuncionarios().pipe(
					map(funcionarios =>
						FuncionariosActions.getFuncionariosSucesso({ funcionarios })
					),
					catchError(erro => of(FuncionariosActions.getFuncionariosFalha({ erro })))
				)
			)
		)
	);

	// Efeito responsável por adicionar um funcionário
	// ----------------------------------------------------
	adicionarFuncionario$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FuncionariosActions.adicionarFuncionario),
			switchMap(({ funcionario }) =>
				this.store.pipe(
					select(getFuncionarioByEmail(funcionario.email)),
					take(1),
					switchMap(funcionarioExistente => {
						if (funcionarioExistente) {
							const action = MensagensActions.showMessage({
								message: 'Já existe um funcionário cadastrado com esse e-mail.',
							});
							return of(action);
						} else {
							return this.funcionariosService.adicionarFuncionario(funcionario).pipe(
								switchMap(dadosNovoFuncionario => [
									MensagensActions.showToast({
										message: 'Funcionário cadastrado com sucesso.',
									}),
									FuncionariosActions.adicionarFuncionarioSucesso({
										funcionario: dadosNovoFuncionario,
									}),
								]),
								catchError(erro =>
									of(FuncionariosActions.adicionarFuncionarioFalha({ erro }))
								)
							);
						}
					})
				)
			)
		)
	);

	// Efeito responsável por excluir um funcionário
	// ----------------------------------------------------
	excluirFuncionario$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FuncionariosActions.excluirFuncionario),
			withLatestFrom(this.store.pipe(select(getUsuario))),
			switchMap(([{ idFuncionario }, usuarioLogado]) => {
				// Não permite a exclusão do próprio usuário
				if (usuarioLogado.id === idFuncionario) {
					return of(
						MensagensActions.showMessage({
							message: 'Não é possível excluir o próprio usuário.',
						})
					);
				}

				// Se não for o mesmo usuário, prossegue com a exclusão.
				return this.funcionariosService.excluirFuncionario(idFuncionario).pipe(
					switchMap(() => [
						MensagensActions.showToast({
							message: 'Funcionário excluído com sucesso.',
						}),
						FuncionariosActions.excluirFuncionarioSucesso({ idFuncionario }),
						FuncionariosActions.limpaSelecaoFuncionario(),
					]),
					catchError(erro => of(FuncionariosActions.excluirFuncionarioFalha({ erro })))
				);
			})
		)
	);

	// Efeito responsável por atualizar um funcionário
	// ----------------------------------------------------
	atualizarFuncionario$ = createEffect(() =>
		this.actions$.pipe(
			ofType(FuncionariosActions.atualizarFuncionario),
			switchMap(({ funcionario }) =>
				this.funcionariosService.atualizarFuncionario(funcionario).pipe(
					switchMap(() => [
						MensagensActions.showToast({
							message: 'Funcionário atualizado com sucesso.',
						}),
						FuncionariosActions.atualizarFuncionarioSucesso({ funcionario }),
					]),
					catchError(erro => of(FuncionariosActions.atualizarFuncionarioFalha({ erro })))
				)
			)
		)
	);
}
