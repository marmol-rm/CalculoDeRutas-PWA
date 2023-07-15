import { TestBed } from '@angular/core/testing';

import { VistaMapaService } from './vista-mapa.service';

describe('VistaMapaService', () => {
  let service: VistaMapaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistaMapaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
