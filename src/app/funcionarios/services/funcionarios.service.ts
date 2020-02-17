import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario, USUARIO_FAKE } from '../models/usuario.model';
import { Guid } from 'guid-typescript';

@Injectable({
	providedIn: 'root',
})
export class FuncionariosService {
	constructor() {}

	getFuncionarios(): Observable<Usuario[]> {
		return of([USUARIO_FAKE]);
	}

	adicionarFuncionario(funcionario: Usuario): Observable<Usuario> {
		funcionario.id = Guid.create().toString();
		return of(funcionario);
	}

	atualizarFuncionario(funcionario: Usuario): Observable<Usuario> {
		return of(funcionario);
	}

	excluirFuncionario(idFuncionario: string): Observable<boolean> {
		return of(true);
	}
}
