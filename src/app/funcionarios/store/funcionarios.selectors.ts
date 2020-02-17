import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FuncionariosState } from './funcionarios.reducer';

const getFeatureState = createFeatureSelector<FuncionariosState>('funcionarios');
export const getFuncionariosState = createSelector(getFeatureState, state =>
	state ? state : ({} as FuncionariosState)
);
export const getFuncionarios = createSelector(getFuncionariosState, ({ entities }) =>
	Object.keys(entities || {}).map(key => entities[key])
);
export const getFuncionarioSelecionado = createSelector(
	getFuncionariosState,
	({ funcionarioSelecionado }) => funcionarioSelecionado
);
export const buscandoFuncionarios = createSelector(
	getFuncionariosState,
	state => state.buscandoFuncionarios
);
export const getFuncionarioByEmail = (email: string) =>
	createSelector(getFuncionarios, funcionarios =>
		(funcionarios || []).find(f => f.email.toLowerCase() === email.toLowerCase())
	);
