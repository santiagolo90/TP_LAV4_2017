import { TestBed, inject } from '../../../node_modules/@angular/core/testing';

import { PaisesService } from './paises.service';

describe('PaisesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaisesService]
    });
  });

  it('should be created', inject([PaisesService], (service: PaisesService) => {
    expect(service).toBeTruthy();
  }));
});
