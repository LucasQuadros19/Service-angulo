import { TestBed } from '@angular/core/testing';

import { PessoaPEssoaServiceService } from './pessoa-pessoa-service.service';

describe('PessoaPEssoaServiceService', () => {
  let service: PessoaPEssoaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PessoaPEssoaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
