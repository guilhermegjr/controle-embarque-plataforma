import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario, USUARIO_FAKE } from 'src/app/funcionarios/models/usuario.model';
import { delay, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class SegurancaService {
	constructor() {}

	efetuarLogin(email: string, senha: string): Observable<Usuario> {
		console.log(email, senha);
		if (email !== USUARIO_FAKE.email || senha !== '123') {
			return of(false).pipe(
				map(() => {
					throw Error('Usuário ou senha inválidos');
				})
			);
		}

		return of(true).pipe(
			delay(100), // Simulando uma chamada do serviço de autenticação
			map(() => USUARIO_FAKE)
		);
	}
}
