import { TestBed } from '@angular/core/testing';

import { SegurancaService } from './seguranca.service';

describe('SegurancaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SegurancaService = TestBed.get(SegurancaService);
    expect(service).toBeTruthy();
  });
});
