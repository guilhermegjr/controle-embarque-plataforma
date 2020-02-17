import { TestBed, async, inject } from '@angular/core/testing';

import { ValidaAutenticacaoGuard } from './valida-autenticacao.guard';

describe('ValidaAutenticacaoGuard', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ValidaAutenticacaoGuard],
		});
	});

	it('should ...', inject([ValidaAutenticacaoGuard], (guard: ValidaAutenticacaoGuard) => {
		expect(guard).toBeTruthy();
	}));
});
