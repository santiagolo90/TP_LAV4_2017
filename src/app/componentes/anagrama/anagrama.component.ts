import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();
	nuevoJuego : JuegoAnagrama;
	botonComenzarVerificar:boolean = true
	spiner:boolean = true;
  gano:boolean = false;
  Mensajes:string;

    constructor() {
    this.nuevoJuego = new JuegoAnagrama(); 
   }

   generarPalabra() {
    this.nuevoJuego.asignarPalabra();
    this.spiner =false;
    this.botonComenzarVerificar = false;
  }
  verificar() {
    if (this.nuevoJuego.palabraIngresada == this.nuevoJuego.palabraAnagrama) {
      return this.MostarMensaje("Ingrese palabra distinta!",false);
      
    }
  	if (this.nuevoJuego.verificar() == true) {
      this.MostarMensaje("Ganaste!!!",true);
  		this.botonComenzarVerificar = true;
  		this.spiner =true;
      this.gano = true;
      this.enviarJuego.emit(this.nuevoJuego);
      this.nuevoJuego = new JuegoAnagrama();
    }
    else{
      this.MostarMensaje("Perdiste!!!",false);
      this.botonComenzarVerificar = true;
  		this.spiner =true;
      this.gano = false;
      this.enviarJuego.emit(this.nuevoJuego);
      this.nuevoJuego = new JuegoAnagrama();
    }

  }

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    let errorEmail = document.getElementById("msjPuntos");
    if(ganador)
      {
        errorEmail.innerHTML = (`<h3 id='msjPuntos'><kbd class= label-success>${mensaje} <i class="far fa-smile"></i> </kbd></h3>`);
      }else{
        errorEmail.innerHTML = (`<h3 id='msjPuntos'><kbd class= label-danger>${mensaje} <i class="far fa-frown"></i></kbd></h3>`);
      }
    var modelo=this;
    setTimeout(function(){ 
      // errorEmail.className = errorEmail.className.replace("show", "");
      errorEmail.innerHTML = "";
     }, 3000);
  
   }

  ngOnInit() {
  }

}
