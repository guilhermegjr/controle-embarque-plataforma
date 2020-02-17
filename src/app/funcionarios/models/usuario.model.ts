export interface Usuario {
	id: string;
	nome: string;
	foto: string;
	email: string;
	funcao: string;
	empresa: string;
}

export const USUARIO_FAKE: Usuario = {
	id: '41234123312',
	nome: 'João da Silva',
	foto: './assets/icon/avatar.png',
	email: 'joao@oilgascorp.com',
	funcao: 'Gerente',
	empresa: 'OIL&GAS Corp',
};
