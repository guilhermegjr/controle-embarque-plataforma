import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/funcionarios/models/usuario.model';

// Seleciona um funcionário + Limpa seleção
// ------------------------------------------------
export const selecionarFuncionario = createAction(
	'[Funcionário] Selecionar funcionario',
	props<{ idUsuario: string }>()
);
export const limpaSelecaoFuncionario = createAction('[Funcionário] Limpa seleção funcionario');

// Prepara cadastro de novo funcionário
// ------------------------------------------------
export const preparaCadastroNovoFuncionario = createAction(
	'[Funcionário] Prepara cadastro novo funcionario'
);

// Ações para obter a lista de funcionários
// ------------------------------------------------
export const getFuncionarios = createAction('[Funcionário] Get funcionários');
export const getFuncionariosSucesso = createAction(
	'[Funcionário] Get funcionários (Sucesso)',
	props<{ funcionarios: Usuario[] }>()
);
export const getFuncionariosFalha = createAction(
	'[Funcionário] Get funcionários (Falha)',
	props<{ erro: any }>()
);

// Ações para incluir um funcionário
// ------------------------------------------------
export const adicionarFuncionario = createAction(
	'[Funcionário] Adicionar funcionário',
	props<{ funcionario: Usuario }>()
);
export const adicionarFuncionarioSucesso = createAction(
	'[Funcionário] Adicionar funcionário (Sucesso)',
	props<{ funcionario: Usuario }>()
);
export const adicionarFuncionarioFalha = createAction(
	'[Funcionário] Adicionar funcionário (Falha)',
	props<{ erro: any }>()
);

// Ações para excluir um funcionário
// ------------------------------------------------
export const excluirFuncionario = createAction(
	'[Funcionário] Excluir funcionário',
	props<{ idFuncionario: string }>()
);
export const excluirFuncionarioSucesso = createAction(
	'[Funcionário] Excluir funcionário (Sucesso)',
	props<{ idFuncionario: string }>()
);
export const excluirFuncionarioFalha = createAction(
	'[Funcionário] Excluir funcionário (Falha)',
	props<{ erro: any }>()
);

// Ações para atualizar um funcionário
// ------------------------------------------------
export const atualizarFuncionario = createAction(
	'[Funcionário] Atualizar funcionário',
	props<{ funcionario: Usuario }>()
);
export const atualizarFuncionarioSucesso = createAction(
	'[Funcionário] Atualizar funcionário (Sucesso)',
	props<{ funcionario: Usuario }>()
);
export const atualizarFuncionarioFalha = createAction(
	'[Funcionário] Atualizar funcionário (Falha)',
	props<{ erro: any }>()
);
