import { Usuario } from 'src/app/funcionarios/models/usuario.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as SegurancaActions from './seguranca.actions';

export interface SegurancaState {
	usuarioLogado: Usuario;
	efetuandoLogin: boolean;
	erro: any;
}

export const initialState: SegurancaState = {
	usuarioLogado: null,
	efetuandoLogin: false,
	erro: null,
};

const reducer = createReducer(
	initialState,
	on(SegurancaActions.efetuarLogin, state => ({ ...state, efetuandoLogin: true })),
	on(SegurancaActions.efetuarLoginSucesso, (state, { usuario }) => ({
		...state,
		usuarioLogado: usuario,
		efetuandoLogin: false,
	})),
	on(SegurancaActions.efetuarLoginFalha, (state, { erro }) => ({
		...state,
		erro,
		efetuandoLogin: false,
	}))
);

export function segurancaReducer(state: SegurancaState | undefined, action: Action) {
	return reducer(state, action);
}
