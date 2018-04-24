import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
import { JuegoSonido } from '../../clases/juego-sonido';

@Component({
  selector: 'app-juego-sonido',
  templateUrl: './juego-sonido.component.html',
  styleUrls: ['./juego-sonido.component.css']
})
export class JuegoSonidoComponent implements OnInit {
  //public audio = document.getElementById('demo');
  nuevoJuego : JuegoSonido;
  botonComenzarVerificar:boolean = true
  botonSiguiente:boolean = false;
  labelPuntos:boolean = false;
  puntos:number = 0;
  sonidoRepetir:string;
  nombre:String;
  audio = new Audio();
  Mensajes:string;


  constructor() {
    this.nuevoJuego = new JuegoSonido();
    
   }

  generarSonido() {
    //this.audio = new Audio('demo');
    this.nuevoJuego.asignarSonido();
    this.botonComenzarVerificar = false;
    this.botonSiguiente = true;
    this.labelPuntos = true;
    this.sonidoRepetir = "../../../assets/sonidos/"+this.nuevoJuego.sonidoAleatorio+".ogg";
    this.sonido("../../../assets/sonidos/"+this.nuevoJuego.sonidoAleatorio+".ogg")
    // let audio = new Audio();
    // audio.src = "../../../assets/sonidos/"+this.nuevoJuego.sonidoAleatorio+".ogg";
    // this.sonidoRepetir = "../../../assets/sonidos/"+this.nuevoJuego.sonidoAleatorio+".ogg";
    // audio.pause();
    // audio.load();
    // audio.play();
    //this.sonidoAleatorio();
    
   
  }
  sonido(pathAudio:string){
    this.audio.remove();
    this.audio.pause();
    this.audio.src = pathAudio;
    this.audio.play();
  }
  repetirSonido(){
    if (this.sonidoRepetir !="") {
      this.sonido(this.sonidoRepetir)
      // let audio = new Audio();
      // audio.src = this.sonidoRepetir;
      // audio.pause();
      // audio.load();
      // audio.play();
    }
    else{
      alert("sin Sonido");
    }
  }

  verificar(animalSeleccionado:string){
    this.nuevoJuego.respuesta = animalSeleccionado;
    if (this.nuevoJuego.verificar() ==true) {
      this.puntos ++;
      // this.sonido("../../../assets/sonidos/yes.ogg")
      this.MostarMensaje("Muy Bien!!! +1",true);
      
       let audio = new Audio();
       audio.src = "../../../assets/sonidos/yes.ogg";
       audio.pause();
       audio.load();
       audio.play();
       window.setTimeout(function(){}, 1000);
      this.generarSonido();
    }
    else{
      this.puntos --;
      this.MostarMensaje("Mal!!! -1",false);
      this.sonido("../../../assets/sonidos/no.ogg")
      // let audio = new Audio();
      // audio.src = "../../../assets/sonidos/no.ogg";
      // audio.pause();
      // audio.load();
      // audio.play();
    }
  }

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    let errorEmail = document.getElementById("msjPuntos");
    if(ganador)
      {
        errorEmail.innerHTML = (`<h1 id='msjPuntos'><kbd class= label-success>${mensaje} <i class="far fa-smile"></i> </kbd></h1>`);
      }else{
        errorEmail.innerHTML = (`<h1 id='msjPuntos'><kbd class= label-danger>${mensaje} <i class="far fa-frown"></i></kbd></h1>`);
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
