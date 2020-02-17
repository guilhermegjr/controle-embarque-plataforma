import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Plataforma } from '../models/plataforma.model';
import { Guid } from 'guid-typescript';
import { Embarque } from '../models/embarque.model';

@Injectable({
	providedIn: 'root',
})
export class EmbarqueService {
	constructor() {}

	realizarEmbarqueFuncionario(embarque: Embarque): Observable<Embarque> {
		embarque.id = Guid.create().toString();
		return of(embarque);
	}

	atualizarEmbarqueFuncionario(embarque: Embarque): Observable<boolean> {
		return of(true);
	}

	cancelarEmbarqueFuncionario(embarque: Embarque): Observable<boolean> {
		return of(true);
	}

	getEmbarquesProgramados(): Observable<Embarque[]> {
		return of([]);
	}

	getPlataformasDisponiveis(): Observable<Plataforma[]> {
		return of([
			{
				id: Guid.create().toString(),
				nome: 'Plataforma XYZ 654',
				uf: 'RJ',
				cidade: 'Macaé',
			},
			{
				id: Guid.create().toString(),
				nome: 'Plataforma XPTO 321',
				uf: 'SP',
				cidade: 'Santos',
			},
			{
				id: Guid.create().toString(),
				nome: 'Plataforma KQW 981',
				uf: 'RJ',
				cidade: 'Rio de Janeiro',
			},
		]);
	}
}
