import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SegurancaState } from './seguranca.reducer';

const getFeatureState = createFeatureSelector<SegurancaState>('seguranca');
export const getSegurancaState = createSelector(getFeatureState, state =>
	state ? state : ({} as SegurancaState)
);
export const getUsuario = createSelector(getSegurancaState, state => state.usuarioLogado);
export const efetuandoLogin = createSelector(getSegurancaState, state => state.efetuandoLogin);
