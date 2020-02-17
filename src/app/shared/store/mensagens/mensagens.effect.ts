import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as MensagensActions from './mensagens.action';

@Injectable()
export class MensgensEffects {
	constructor(
		private actions$: Actions,
		private toast: ToastController,
		private alert: AlertController
	) {}

	showErrorMessage$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(MensagensActions.showErrorMessage),
				tap(async ({ erro }) => {
					const alert = await this.alert.create({
						header: 'Informação',
						message: erro.message,
						buttons: ['Ok'],
					});
					alert.present();
				})
			),
		{ dispatch: false }
	);

	showMessage$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(MensagensActions.showMessage),
				tap(async msg => {
					const alert = await this.alert.create({
						header: msg.title || 'Informação',
						message: msg.message,
						buttons: [
							{
								text: 'Ok',
								handler: () => {
									if (msg.callback) {
										msg.callback();
									}
								},
							},
						],
					});
					alert.present();
				})
			),
		{ dispatch: false }
	);

	showToast$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(MensagensActions.showToast),
				tap(async msg => {
					const toast = await this.toast.create({
						header: msg.title,
						message: msg.message,
						color: msg.color,
						position: msg.position || 'bottom',
						duration: msg.duration || 3000,
						buttons: msg.buttons,
					});
					toast.present();
				})
			),
		{ dispatch: false }
	);

	showConfirmMessage$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(MensagensActions.showConfirmMessage),
				tap(async payload => {
					const alert = await this.alert.create({
						header: payload.title || 'Confirmação',
						message: payload.message,
						buttons: [
							{
								text: 'Não',
								role: 'cancel',
								cssClass: 'secondary',
								handler: () => {
									if (payload.cancelCallback) {
										payload.cancelCallback();
									}
								},
							},
							{
								text: 'Sim',
								handler: () => payload.successCallback(),
							},
						],
					});

					alert.present();
				})
			),
		{ dispatch: false }
	);
}
