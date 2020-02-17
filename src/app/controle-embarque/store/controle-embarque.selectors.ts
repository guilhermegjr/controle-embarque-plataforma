import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmbarqueState } from './controle-embarque.reducer';
import { Usuario } from 'src/app/funcionarios/models/usuario.model';
import { getFuncionarios } from 'src/app/funcionarios/store/funcionarios.selectors';

const getState = createFeatureSelector<EmbarqueState>('embarques');
export const getEmbarqueState = createSelector(getState, state =>
	state ? state : ({} as EmbarqueState)
);
export const getEmbarqueSelecionado = createSelector(
	getEmbarqueState,
	({ embarqueSelecionado }) => embarqueSelecionado
);
export const getPlataformas = createSelector(getEmbarqueState, state => state.plataformas);
export const getEmbarquesProgramados = createSelector(getEmbarqueState, ({ entities }) =>
	Object.keys(entities || {}).map(key => entities[key])
);
export const getTotalEmbarques = createSelector(
	getEmbarquesProgramados,
	embarques => embarques.length
);
export const getEmbarquesFuncionario = (funcionario: Usuario) =>
	createSelector(getEmbarquesProgramados, embarques =>
		embarques.filter(e => e.funcionario.id === funcionario.id)
	);

export const getFuncionariosDisponiveisEmbarquePeriodo = (dataInicial: Date, dataFinal: Date) =>
	createSelector(getEmbarquesProgramados, getFuncionarios, (embarques, funcionarios) => {
		// Pega a lista de funcionários que estão embarcados no perído informado.
		const funcionariosEmbarcados = embarques
			.filter(
				embarque =>
					(embarque.dataInicio.getTime() >= dataInicial.getTime() &&
						embarque.dataInicio.getTime() <= dataFinal.getTime()) ||
					(embarque.dataTermino.getTime() >= dataInicial.getTime() &&
						embarque.dataTermino.getTime() <= dataFinal.getTime())
			)
			.map(embarque => embarque.funcionario);

		// Retorna a lista de funcionários que não estão embarcados no período
		return funcionarios.filter(
			funcionario =>
				!funcionariosEmbarcados.find(funcEmbarcado => funcEmbarcado.id === funcionario.id)
		);
	});
