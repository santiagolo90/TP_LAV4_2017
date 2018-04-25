import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  
  nuevoJuego : JuegoPiedraPapelTijera;
  elecccionJugador:number;
  eleccionMalo:number;
  audio = new Audio();
  Mensajes:string;
  puntos:number = 0;
  botonComenzarVerificar:boolean =true;
  labelPuntos:boolean = true;

  constructor() { 
    this.nuevoJuego = new JuegoPiedraPapelTijera();
  }

  generarPartida(eleccionAux:number) {
    //this.audio = new Audio('demo');
    this.nuevoJuego.asignarPPT(eleccionAux);
    this.nuevoJuego.verificar();
    this.resultados();

    
   
  }
  sonido(pathAudio:string){
    this.audio.remove();
    this.audio.pause();
    this.audio.src = pathAudio;
    this.audio.play();
  }

  resultados(){
    //this.nuevoJuego.respuesta = animalSeleccionado;
    if (this.nuevoJuego.verificar() ==true) {
      this.puntos ++;
      this.MostarMensaje("Ganaste!!! +1",true);
    }
    if (this.nuevoJuego.verificar() ==false) {
      this.puntos --;
      this.MostarMensaje("Perdiste!!! -1",false);
    }
    if (this.nuevoJuego.verificar() ==null) {
      this.MostarMensaje("Empate!!!",null);
    }
  }

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean) {
    this.Mensajes=mensaje;    
    let errorEmail = document.getElementById("msjPuntos");
    if(ganador==true){
        errorEmail.innerHTML = (`<h1 id='msjPuntos'><kbd class= label-success>${mensaje} <i class="far fa-smile"></i> </kbd></h1>`);
      }
    if(ganador==false) {
      errorEmail.innerHTML = (`<h1 id='msjPuntos'><kbd class= label-danger>${mensaje} <i class="far fa-frown"></i></kbd></h1>`);
      }
    if (ganador==null) {
      errorEmail.innerHTML = (`<h1 id='msjPuntos'><kbd class= label-warning>${mensaje} <i class="far fa-meh"></i></kbd></h1>`);
    }

    var modelo=this;
    setTimeout(function(){ 
      // errorEmail.className = errorEmail.className.replace("show", "");
      errorEmail.innerHTML = "";
     }, 3000);
    console.info("objeto",errorEmail);
  
   } 

  

  ngOnInit() {
  }

}
