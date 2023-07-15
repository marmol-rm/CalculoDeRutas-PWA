import { TestBed } from '@angular/core/testing';

import { VistaUsuarioService } from './vista-usuario.service';

describe('VistaUsuarioService', () => {
  let service: VistaUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistaUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
