import { TestBed, inject } from '@angular/core/testing';

import { ExibicaoRelatorioService } from './exibicao-relatorio.service';

describe('ExibicaoRelatorioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExibicaoRelatorioService]
    });
  });

  it('should be created', inject([ExibicaoRelatorioService], (service: ExibicaoRelatorioService) => {
    expect(service).toBeTruthy();
  }));
});
