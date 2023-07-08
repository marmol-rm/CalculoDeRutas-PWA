import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRegUsuarioComponent } from './vista-reg-usuario.component';

describe('VistaRegUsuarioComponent', () => {
  let component: VistaRegUsuarioComponent;
  let fixture: ComponentFixture<VistaRegUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaRegUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaRegUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
