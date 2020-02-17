import { createAction, props } from '@ngrx/store';
import { ToastButton } from '@ionic/core';

export const showErrorMessage = createAction(
	'[Messages] ShowErrorMessage (Ok)',
	props<{ erro: any }>()
);
export const showMessage = createAction(
	'[Messages] Show message (Ok)',
	props<{ message: string; title?: string; callback?: () => void }>()
);
export const showToast = createAction(
	'[Messages] Show toast (Ok)',
	props<{
		title?: string;
		message: string;
		color?: string;
		duration?: number;
		position?: 'bottom' | 'top' | 'middle';
		closeButtonText?: string;
		buttons?: (ToastButton | string)[];
	}>()
);
export const showConfirmMessage = createAction(
	'[Messages] Show confirm message (Ok)',
	props<{
		message: string;
		title?: string;
		successCallback: () => void;
		cancelCallback?: () => void;
	}>()
);
