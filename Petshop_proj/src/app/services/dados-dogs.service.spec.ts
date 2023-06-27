import { TestBed } from '@angular/core/testing';

import { DadosDogsService } from './dados-dogs.service';

describe('DadosDogsService', () => {
  let service: DadosDogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosDogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
