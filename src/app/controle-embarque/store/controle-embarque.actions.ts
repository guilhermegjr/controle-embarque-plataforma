import { createAction, props } from '@ngrx/store';
import { Embarque } from '../models/embarque.model';
import { Plataforma } from '../models/plataforma.model';

// Ações responsáveis por selecionar, limpar seleção de embarque e Preparar novo embarque
// ---------------------------------------------------------------------------------------------
export const selecionarEmbarque = createAction(
	'[Embarque] Selecionar embarque',
	props<{ idEmbarque: string }>()
);
export const limparSelecaoEmbarque = createAction('[Embarque] Limpar seleção embarque');
export const prepararNovoEmbarque = createAction('[Embarque] Preparar novo embarque');

// Ações responsáveis por obter a lista de plataformas disponíveis
// ---------------------------------------------------------------------------------------------
export const getPlataformasDisponiveis = createAction('[Embarque] Get plataformas disponíveis');
export const getPlataformasDisponiveisSucesso = createAction(
	'[Embarque] Get plataformas disponíveis (Sucesso)',
	props<{ plataformas: Plataforma[] }>()
);
export const getPlataformasDisponiveisFalha = createAction(
	'[Embarque] Get plataformas disponíveis (Falha)',
	props<{ erro: any }>()
);

// Ações responsáveis por obter a lista de embarques programados
// ---------------------------------------------------------------------------------------------
export const getEmbarquesProgramados = createAction('[Embarque] Get embarques programados');
export const getEmbarquesProgramadosSucesso = createAction(
	'[Embarque] Get embarques programados (Sucesso)',
	props<{ embarques: Embarque[] }>()
);
export const getEmbarquesProgramadosFalha = createAction(
	'[Embarque] Get embarques programados (Falha)',
	props<{ erro: any }>()
);

// Ações responsáveis por embarcar um funcionário
// ---------------------------------------------------------------------------------------------
export const realizarEmbarqueFuncionario = createAction(
	'[Embarque] Realizar embarque funcionário',
	props<{ embarque: Embarque }>()
);
export const realizarEmbarqueFuncionarioSucesso = createAction(
	'[Embarque] Realizar embarque funcionário (Sucesso)',
	props<{ embarque: Embarque }>()
);
export const realizarEmbarqueFuncionarioFalha = createAction(
	'[Embarque] Realizar embarque funcionário (Falha)',
	props<{ erro: any }>()
);

// Ações responsáveis por atualizar um embarque de um funcionário
// ---------------------------------------------------------------------------------------------
export const atualizarEmbarqueFuncionario = createAction(
	'[Embarque] Atualizar embarque funcionário',
	props<{ embarque: Embarque }>()
);
export const atualizarEmbarqueFuncionarioSucesso = createAction(
	'[Embarque] Atualizar embarque funcionário (Sucesso)',
	props<{ embarque: Embarque }>()
);
export const atualizarEmbarqueFuncionarioFalha = createAction(
	'[Embarque] Atualizar embarque funcionário (Falha)',
	props<{ erro: any }>()
);

// Ações responsáveis por cancelar o embarque de um funcionário
// ---------------------------------------------------------------------------------------------
export const cancelarEmbarqueFuncionario = createAction(
	'[Embarque] Cancelar embarque funcionário',
	props<{ embarque: Embarque }>()
);
export const cancelarEmbarqueFuncionarioSucesso = createAction(
	'[Embarque] Cancelar embarque funcionário (Sucesso)',
	props<{ embarque: Embarque }>()
);
export const cancelarEmbarqueFuncionarioFalha = createAction(
	'[Embarque] Cancelar embarque funcionário (Falha)',
	props<{ erro: any }>()
);
