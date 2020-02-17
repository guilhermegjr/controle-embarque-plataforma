import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Pipe({
	name: 'filtroFuncionario',
})
export class FiltroFuncionarioPipe implements PipeTransform {
	transform(funcionarios: Usuario[], textoProcurado: string): Usuario[] {
		return !textoProcurado || !funcionarios || !funcionarios.length
			? funcionarios
			: funcionarios.filter(
					({ nome, email, empresa, funcao }) =>
						busca(textoProcurado, nome) ||
						busca(textoProcurado, email) ||
						busca(textoProcurado, empresa) ||
						busca(textoProcurado, funcao)
			  );
	}
}

function busca(textoProcurado: string, texto: string) {
	texto = texto.toLowerCase();
	textoProcurado = textoProcurado.toLowerCase();
	const existe = texto.indexOf(textoProcurado) !== -1;
	return existe;
}
