export interface Plataforma {
	id: string;
	nome: string;
	uf: string;
	cidade: string;
	posicao?: {
		lat: number;
		lng: number;
	};
}
