import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/funcionarios/models/usuario.model';

// Ações para Login
// ------------------------------------------------
export const efetuarLogin = createAction(
	'[Segurança] Efetuar login',
	props<{ email: string; senha: string }>()
);
export const efetuarLoginSucesso = createAction(
	'[Segurança] Efetuar login (Sucesso)',
	props<{ usuario: Usuario }>()
);
export const efetuarLoginFalha = createAction(
	'[Segurança] Efetuar login (Falha)',
	props<{ erro: any }>()
);
