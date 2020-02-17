import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Embarque } from '../models/embarque.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as EmbarqueActions from './controle-embarque.actions';
import { Plataforma } from '../models/plataforma.model';

export interface EmbarqueState extends EntityState<Embarque> {
	carregandoPlataformas: boolean;
	carregandoEmbarques: boolean;
	embarqueSelecionado: Embarque;
	plataformas: Plataforma[];
	erro: any;
}

const adapter = createEntityAdapter<Embarque>();

export const initialState = adapter.getInitialState({
	carregandoPlataformas: false,
	carregandoEmbarques: false,
	embarqueSelecionado: null,
	plataformas: [],
	erro: null,
});

const reducer = createReducer(
	initialState,
	// Reduções selecionar, limpar seleção do embarque e preparar novo embarque
	on(EmbarqueActions.selecionarEmbarque, (state, { idEmbarque }) => ({
		...state,
		embarqueSelecionado: state.entities[idEmbarque],
	})),
	on(EmbarqueActions.limparSelecaoEmbarque, state => ({
		...state,
		embarqueSelecionado: null,
	})),
	on(EmbarqueActions.prepararNovoEmbarque, state => ({
		...state,
		embarqueSelecionado: {
			id: null,
			plataforma: null,
			funcionario: null,
			dataInicio: null,
			dataTermino: null,
		},
	})),

	// Reduções getPlataformasDisponiveis
	on(EmbarqueActions.getPlataformasDisponiveis, state => ({
		...state,
		carregandoPlataformas: true,
	})),
	on(EmbarqueActions.getPlataformasDisponiveisSucesso, (state, { plataformas }) => ({
		...state,
		plataformas,
		carregandoPlataformas: false,
	})),
	on(EmbarqueActions.getPlataformasDisponiveisFalha, (state, { erro }) => ({
		...state,
		erro,
		carregandoPlataformas: false,
	})),

	// Reduções getEmbarquesProgramados
	on(EmbarqueActions.getEmbarquesProgramados, state => ({
		...state,
		carregandoEmbarques: true,
	})),
	on(EmbarqueActions.getEmbarquesProgramadosSucesso, (state, { embarques }) =>
		adapter.upsertMany(embarques, {
			...state,
			carregandoEmbarques: false,
		})
	),
	on(EmbarqueActions.getEmbarquesProgramadosFalha, (state, { erro }) => ({
		...state,
		erro,
		carregandoEmbarques: false,
	})),

	// Reduções realizarEmbarqueFuncionario
	on(EmbarqueActions.realizarEmbarqueFuncionarioSucesso, (state, { embarque }) =>
		adapter.addOne(embarque, state)
	),
	on(EmbarqueActions.realizarEmbarqueFuncionarioFalha, (state, { erro }) => ({
		...state,
		erro,
	})),

	// Reduções atualizarEmbarqueFuncionario
	on(EmbarqueActions.atualizarEmbarqueFuncionarioSucesso, (state, { embarque }) =>
		adapter.upsertOne(embarque, state)
	),
	on(EmbarqueActions.atualizarEmbarqueFuncionarioFalha, (state, { erro }) => ({
		...state,
		erro,
	})),

	// Reduções cancelarEmbarqueFuncionario
	on(EmbarqueActions.cancelarEmbarqueFuncionario, (state, { embarque }) =>
		adapter.removeOne(embarque.id, state)
	),
	on(EmbarqueActions.cancelarEmbarqueFuncionarioFalha, (state, { erro }) => ({
		...state,
		erro,
	}))
);

export function embarquesReducer(state: EmbarqueState | undefined, action: Action) {
	return reducer(state, action);
}
