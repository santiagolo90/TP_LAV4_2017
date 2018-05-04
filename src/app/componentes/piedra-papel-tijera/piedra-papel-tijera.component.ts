import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Juego } from '../../clases/juego';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  @Output()enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  
  nuevoJuego : JuegoPiedraPapelTijera;
  elecccionJugador:number =0
  eleccionMalo:number =0;
  audio = new Audio();
  Mensajes:string;
  puntos:number = 0;
  puntosRival:number = 0;
  botonComenzarVerificar:boolean =true;
  mostrarGif:boolean =true;
  labelPuntos:boolean = false;
  labelGanaste:boolean =false;
  labelPerdiste:boolean =false;

  constructor() { 
    this.nuevoJuego = new JuegoPiedraPapelTijera();
    
  }
  primerJuego(){
    //this.generarPartida(Math.floor(Math.random() * 3) + 1);
    this.nuevoJuego = new JuegoPiedraPapelTijera();
    this.botonComenzarVerificar = false;
    let botonPiedra:any = document.getElementById("botonPiedra");
    let botonPapel:any = document.getElementById("botonPapel");
    let botonTijera:any = document.getElementById("botonTijera");
    
    botonPiedra.disabled =false;
    botonPapel.disabled =false;
    botonTijera.disabled =false;
  }

  generarPartida(eleccionAux:number) {
    //this.audio = new Audio('demo');
    //this.sonido("../../../assets/PPT/sonido/PPT.ogg");
    let botonPiedra:any = document.getElementById("botonPiedra");
    let botonPapel:any = document.getElementById("botonPapel");
    let botonTijera:any = document.getElementById("botonTijera");
    
    botonPiedra.disabled =true;
    botonPapel.disabled =true;
    botonTijera.disabled =true;
    this.sonido("../../../assets/PPT/sonido/PPT.ogg");
    

    setTimeout( () => {
      this.botonComenzarVerificar = false;
      this.labelPuntos = true;
      this.labelGanaste =false;
      this.labelPerdiste =false;
      this.nuevoJuego.asignarPPT(eleccionAux);
      this.elecccionJugador = eleccionAux;
      this.eleccionMalo = this.nuevoJuego.eleccionRandom;
      this.nuevoJuego.verificar();
      this.resultados();
    }, 2000 );
    

    
   
  }
  sonido(pathAudio:string){
    this.audio.src = pathAudio;
    this.audio.play();
    // this.audio.remove();
    // this.audio.pause();
    // this.audio.src = pathAudio;
    // this.audio.play();
  }

  resultados(){
    //this.nuevoJuego.respuesta = animalSeleccionado;
    if (this.nuevoJuego.verificar() ==null) {
      this.MostarMensaje("Empate!!!",null);
    }
    if (this.nuevoJuego.verificar() ==true) {
      this.puntos ++;
      if (this.puntos == 3) {
        this.nuevoJuego.gano =true;
        this.enviarJuego.emit(this.nuevoJuego);
        this.botonComenzarVerificar = false;
        this.labelGanaste =true;
        this.labelPuntos = false;
        this.puntosRival =0;
        this.puntos=0;
        this.nuevoJuego = new JuegoPiedraPapelTijera();
      }
      // if (this.puntosRival > 0) {
      //   this.puntosRival --
      // }
      this.MostarMensaje("Ganaste!!! +1",true);
    }
    if (this.nuevoJuego.verificar() ==false) {
      this.puntosRival ++;
      if (this.puntosRival == 3) {
        this.nuevoJuego.gano =false;
        this.enviarJuego.emit(this.nuevoJuego);
        this.botonComenzarVerificar = false;
        this.labelPerdiste =true;
        this.labelPuntos = false;
        this.puntosRival =0;
        this.puntos=0;
        this.nuevoJuego = new JuegoPiedraPapelTijera();
        
      }
      // if (this.puntos > 0) {
      //   this.puntos --;
      // }
      this.MostarMensaje("Perdiste!!! -1",false);
    }

  }

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean) {
    this.Mensajes=mensaje;
    this.mostrarGif = false;    

    let errorEmail = document.getElementById("msjPuntos");
    let resultado1:any = document.getElementById("resultado1");
    let resultado2:any = document.getElementById("resultado2");

    let botonPiedra:any = document.getElementById("botonPiedra");
    let botonPapel:any = document.getElementById("botonPapel");
    let botonTijera:any = document.getElementById("botonTijera");
    
    botonPiedra.disabled =true;
    botonPapel.disabled =true;
    botonTijera.disabled =true;



    if(ganador==true){
        errorEmail.innerHTML = (`<h1 id='msjPuntos'><kbd class= label-success>${mensaje} <i class="far fa-smile"></i> </kbd></h1>`);
        resultado1.src = `../../../assets/PPT/img/a${this.elecccionJugador}.png`;
        resultado2.src = `../../../assets/PPT/img/m${this.eleccionMalo}.png`;
        this.sonido("../../../assets/PPT/sonido/ganastePPT.ogg");
      }
    if(ganador==false) {
      errorEmail.innerHTML = (`<h1 id='msjPuntos'><kbd class= label-danger>${mensaje} <i class="far fa-frown"></i></kbd></h1>`);
      resultado1.src = `../../../assets/PPT/img/a${this.elecccionJugador}.png`;
      resultado2.src = `../../../assets/PPT/img/m${this.eleccionMalo}.png`;
      this.sonido("../../../assets/PPT/sonido/perdistePPT.ogg");
      }
    if (ganador==null) {
      errorEmail.innerHTML = (`<h1 id='msjPuntos'><kbd class= label-warning>${mensaje} <i class="far fa-meh"></i></kbd></h1>`);
      resultado1.src = `../../../assets/PPT/img/a${this.elecccionJugador}.png`;
      resultado2.src = `../../../assets/PPT/img/m${this.eleccionMalo}.png`;
      this.sonido("../../../assets/PPT/sonido/empatePPT.ogg");
    }

    var modelo=this;
     setTimeout( () => {
      // errorEmail.className = errorEmail.className.replace("show", "");
      errorEmail.innerHTML = "";
      resultado1.src = "";
      resultado2.src = "";
    }, 2000 );

    setTimeout( () => {
      this.mostrarGif = true
      botonPiedra.disabled =false;
      botonPapel.disabled =false;
      botonTijera.disabled =false;
    }, 2500 );
  
   } 

  

  ngOnInit() {
  }

}
