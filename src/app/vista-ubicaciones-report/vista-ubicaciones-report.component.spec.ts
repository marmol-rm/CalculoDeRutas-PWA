import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaUbicacionesReportComponent } from './vista-ubicaciones-report.component';

describe('VistaUbicacionesReportComponent', () => {
  let component: VistaUbicacionesReportComponent;
  let fixture: ComponentFixture<VistaUbicacionesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaUbicacionesReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaUbicacionesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
