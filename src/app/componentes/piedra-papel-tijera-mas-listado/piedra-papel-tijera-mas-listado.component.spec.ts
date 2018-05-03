import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedraPapelTijeraMasListadoComponent } from './piedra-papel-tijera-mas-listado.component';

describe('PiedraPapelTijeraMasListadoComponent', () => {
  let component: PiedraPapelTijeraMasListadoComponent;
  let fixture: ComponentFixture<PiedraPapelTijeraMasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiedraPapelTijeraMasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiedraPapelTijeraMasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
