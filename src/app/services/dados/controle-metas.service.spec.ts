import { TestBed, inject } from '@angular/core/testing';

import { ControleMetasService } from './controle-metas.service';

describe('ControleMetasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControleMetasService]
    });
  });

  it('should be created', inject([ControleMetasService], (service: ControleMetasService) => {
    expect(service).toBeTruthy();
  }));
});
