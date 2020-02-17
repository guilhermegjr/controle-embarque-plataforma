import { Injectable } from '@angular/core';
import { EmbarqueService } from '../services/embarque.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as EmbarqueActions from './controle-embarque.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Embarque } from '../models/embarque.model';

@Injectable()
export class ControleEmbarqueEffects {
	constructor(private embarqueServices: EmbarqueService, private actions$: Actions) {}

	getPlataformas$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EmbarqueActions.getPlataformasDisponiveis),
			switchMap(() =>
				this.embarqueServices.getPlataformasDisponiveis().pipe(
					map(plataformas =>
						EmbarqueActions.getPlataformasDisponiveisSucesso({ plataformas })
					),
					catchError(erro => of(EmbarqueActions.getPlataformasDisponiveisFalha({ erro })))
				)
			)
		)
	);

	getEmbarquesProgramados$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EmbarqueActions.getEmbarquesProgramados),
			switchMap(() =>
				this.embarqueServices.getEmbarquesProgramados().pipe(
					map(embarques => EmbarqueActions.getEmbarquesProgramadosSucesso({ embarques })),
					catchError(erro => of(EmbarqueActions.getEmbarquesProgramadosFalha({ erro })))
				)
			)
		)
	);

	realizarEmbarqueFuncionario$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EmbarqueActions.realizarEmbarqueFuncionario),
			switchMap(({ embarque }) =>
				this.embarqueServices.realizarEmbarqueFuncionario(embarque).pipe(
					map(novoEmbarque =>
						EmbarqueActions.realizarEmbarqueFuncionarioSucesso({
							embarque: novoEmbarque,
						})
					),
					catchError(erro =>
						of(EmbarqueActions.realizarEmbarqueFuncionarioFalha({ erro }))
					)
				)
			)
		)
	);

	atualizarEmbarqueFuncionario$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EmbarqueActions.atualizarEmbarqueFuncionario),
			switchMap(({ embarque }) =>
				this.embarqueServices.atualizarEmbarqueFuncionario(embarque).pipe(
					map(() =>
						EmbarqueActions.atualizarEmbarqueFuncionarioSucesso({
							embarque,
						})
					),
					catchError(erro =>
						of(EmbarqueActions.atualizarEmbarqueFuncionarioFalha({ erro }))
					)
				)
			)
		)
	);

	cancelarEmbarqueFuncionario$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EmbarqueActions.cancelarEmbarqueFuncionario),
			switchMap(({ embarque }) =>
				this.embarqueServices.cancelarEmbarqueFuncionario(embarque).pipe(
					switchMap(() => [
						EmbarqueActions.cancelarEmbarqueFuncionarioSucesso({ embarque }),
						EmbarqueActions.limparSelecaoEmbarque(),
					]),
					catchError(erro =>
						of(EmbarqueActions.cancelarEmbarqueFuncionarioFalha({ erro }))
					)
				)
			)
		)
	);
}
