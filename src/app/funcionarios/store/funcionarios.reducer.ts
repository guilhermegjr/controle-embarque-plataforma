import { Usuario } from 'src/app/funcionarios/models/usuario.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as FuncionariosActions from './funcionarios.actions';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export interface FuncionariosState extends EntityState<Usuario> {
	buscandoFuncionarios: boolean;
	funcionarioSelecionado: Usuario;
	erro: any;
}

const adapter: EntityAdapter<Usuario> = createEntityAdapter<Usuario>();

export const initialState: FuncionariosState = adapter.getInitialState({
	buscandoFuncionarios: false,
	funcionarioSelecionado: null,
	erro: null,
});

const reducer = createReducer(
	initialState,
	// Reduções preparaCadastroNovoFuncionario
	on(FuncionariosActions.preparaCadastroNovoFuncionario, state => ({
		...state,
		funcionarioSelecionado: {
			id: '',
			nome: '',
			foto: './assets/icon/avatar.png',
			email: '',
			funcao: '',
			empresa: '',
		},
	})),

	// Reduções selecionarFuncionario + limpaSelecaoFuncionario
	on(FuncionariosActions.selecionarFuncionario, (state, { idUsuario }) => ({
		...state,
		funcionarioSelecionado: state.entities[idUsuario],
	})),
	on(FuncionariosActions.limpaSelecaoFuncionario, state => ({
		...state,
		funcionarioSelecionado: null,
	})),

	// Reduções getFuncionarios
	on(FuncionariosActions.getFuncionarios, state => ({
		...state,
		buscandoFuncionarios: true,
	})),
	on(FuncionariosActions.getFuncionariosSucesso, (state, { funcionarios }) =>
		adapter.upsertMany(funcionarios, {
			...state,
			buscandoFuncionarios: false,
		})
	),
	on(FuncionariosActions.getFuncionariosFalha, (state, { erro }) => ({
		...state,
		erro,
		buscandoFuncionarios: false,
	})),

	// Reduções adicionarFuncionario
	on(FuncionariosActions.adicionarFuncionarioSucesso, (state, { funcionario }) =>
		adapter.addOne(funcionario, { ...state, funcionarioSelecionado: funcionario })
	),
	on(FuncionariosActions.adicionarFuncionarioFalha, (state, { erro }) => ({ ...state, erro })),

	// Reduções atualizarFuncionario
	on(FuncionariosActions.atualizarFuncionarioSucesso, (state, { funcionario }) =>
		adapter.updateOne(
			{ id: funcionario.id, changes: funcionario },
			{ ...state, funcionarioSelecionado: funcionario }
		)
	),
	on(FuncionariosActions.atualizarFuncionarioFalha, (state, { erro }) => ({ ...state, erro })),

	// Reduções excluirFuncionarioSucesso
	on(FuncionariosActions.excluirFuncionarioSucesso, (state, { idFuncionario }) =>
		adapter.removeOne(idFuncionario, state)
	),
	on(FuncionariosActions.excluirFuncionarioFalha, (state, { erro }) => ({ ...state, erro }))
);

export function funcionariosReducer(state: FuncionariosState | undefined, action: Action) {
	return reducer(state, action);
}
