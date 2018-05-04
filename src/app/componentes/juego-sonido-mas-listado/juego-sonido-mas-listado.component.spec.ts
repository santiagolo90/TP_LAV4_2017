import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoSonidoMasListadoComponent } from './juego-sonido-mas-listado.component';

describe('JuegoSonidoMasListadoComponent', () => {
  let component: JuegoSonidoMasListadoComponent;
  let fixture: ComponentFixture<JuegoSonidoMasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoSonidoMasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoSonidoMasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
