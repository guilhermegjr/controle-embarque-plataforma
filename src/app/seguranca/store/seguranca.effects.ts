import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import * as SegurancaActions from './seguranca.actions';
import * as MensagensActions from '../../shared/store/mensagens/mensagens.action';
import { USUARIO_FAKE } from 'src/app/funcionarios/models/usuario.model';
import { SegurancaService } from '../services/seguranca.service';
import { NavController } from '@ionic/angular';

@Injectable()
export class SegurancaEffects {
	constructor(
		private actions$: Actions,
		private segurancaService: SegurancaService,
		private route: NavController
	) {}

	// Efeito autenticar o usuário
	// --------------------------------------------------
	efetuarLogin$ = createEffect(() =>
		this.actions$.pipe(
			ofType(SegurancaActions.efetuarLogin),
			switchMap(({ email, senha }) =>
				this.segurancaService.efetuarLogin(email, senha).pipe(
					map(() => SegurancaActions.efetuarLoginSucesso({ usuario: USUARIO_FAKE })),
					catchError(erro => [
						MensagensActions.showErrorMessage({ erro }),
						SegurancaActions.efetuarLoginFalha({ erro }),
					])
				)
			)
		)
	);
	efetuarLoginSucesso$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(SegurancaActions.efetuarLoginSucesso),
				tap(() => this.route.navigateRoot(['']))
			),
		{ dispatch: false }
	);
}
