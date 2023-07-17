import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRutasHoyComponent } from './vista-rutas-hoy.component';

describe('VistaRutasHoyComponent', () => {
  let component: VistaRutasHoyComponent;
  let fixture: ComponentFixture<VistaRutasHoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaRutasHoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaRutasHoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
