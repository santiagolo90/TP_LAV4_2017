import { Component, OnInit } from '../../../../node_modules/@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';

import {Subscription} from "../../../../node_modules/rxjs";
import {TimerObservable} from "../../../../node_modules/rxjs/observable/TimerObservable";
@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
	nuevoJuego : JuegoAnagrama;
	botonComenzarVerificar:boolean = true
	spiner:boolean = true;
	gano:boolean = false;

    constructor() {
    this.nuevoJuego = new JuegoAnagrama(); 
   }

   generarPalabra() {
    this.nuevoJuego.asignarPalabra();
    this.spiner =false;
    this.botonComenzarVerificar = false;
  }
  verificar() {
  	if (this.nuevoJuego.verificar() == true) {
  		this.botonComenzarVerificar = true;
  		this.spiner =true;
  		this.gano = true;
  	}

  }

  ngOnInit() {
  }

}
