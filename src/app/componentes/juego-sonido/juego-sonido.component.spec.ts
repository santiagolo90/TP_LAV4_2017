import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoSonidoComponent } from './juego-sonido.component';

describe('JuegoSonidoComponent', () => {
  let component: JuegoSonidoComponent;
  let fixture: ComponentFixture<JuegoSonidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoSonidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoSonidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
