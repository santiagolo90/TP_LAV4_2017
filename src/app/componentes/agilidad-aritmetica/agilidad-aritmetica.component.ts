import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
import { empty } from 'rxjs/observable/empty';
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output()enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor:any;
  //mios
  miNumero:number;
  gano:boolean;
  spiner:boolean = true;
  Mensajes:string;

  private subscription: Subscription;
  ngOnInit() {
  }
   constructor() {
     this.ocultarVerificar=true;
     this.Tiempo=5; 
     this.nuevoJuego = new JuegoAgilidad();
     console.info("Inicio agilidad");  
  }

  NuevoJuego() {
    this.nuevoJuego = new JuegoAgilidad();
    this.gano = false;
    this.spiner = false;
    this.nuevoJuego.randomNumeroOperador();


    //no mio
    this.ocultarVerificar=false;
    this.repetidor = setInterval(()=>{ 
      
      this.Tiempo--;
      console.log("llego", this.Tiempo);
      if(this.Tiempo==0 ) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar=true;
        this.Tiempo=5;
      }
      }, 900);



  }
  verificar()
  {
    this.ocultarVerificar=false;
    clearInterval(this.repetidor);

    // this.nuevoJuego.calcular(this.miNumero);
    // this.gano = this.nuevoJuego.calcular(this.miNumero);
    // this.spiner = true;
    // this.ocultarVerificar=true;


    this.nuevoJuego.calcular(this.miNumero);
    this.gano = this.nuevoJuego.calcular(this.miNumero);
    console.log("GAANO",this.gano);
    
    if (this.gano == true) {
      this.miNumero =0;
      this.MostarMensaje("Sos un capo,Ganaste!!!",true);
      this.enviarJuego.emit(this.nuevoJuego);
    }
    else{
      this.miNumero =0;
      this.MostarMensaje("La próxima será!!!",false);
      this.enviarJuego.emit(this.nuevoJuego);
    }
    this.spiner = true;
    this.ocultarVerificar=true;
   

   
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
    console.info("objeto",errorEmail);
  
   }


}
