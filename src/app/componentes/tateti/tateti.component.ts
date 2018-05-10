import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Juego } from '../../clases/juego';
import { JuegoTateti } from '../../clases/juego-tateti';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  nuevoJuego : JuegoTateti;
  imgX:boolean = true;
  nada:string = "../../../assets/tateti/nada.gif";
  srcX:string = "../../../assets/tateti/x.gif";
  imgO:boolean = false;
  src0:string = "../../../assets/tateti/o.gif";
  contador:number =0;
  jugador:string;
  tipoJugador:string;
  Mensajes:string;
  botonComenzar:boolean = true;
  botonJugardeNuevo:boolean = false;
  labelGanaste:boolean = false;
  labelPerdiste:boolean = false;
  labelEmpate:boolean = false;
  ganador:string ="--"

  img1:string="../../../assets/tateti/nada.gif";
  img2:string="../../../assets/tateti/nada.gif";
  img3:string="../../../assets/tateti/nada.gif";
  img4:string="../../../assets/tateti/nada.gif";
  img5:string="../../../assets/tateti/nada.gif";
  img6:string="../../../assets/tateti/nada.gif";
  img7:string="../../../assets/tateti/nada.gif";
  img8:string="../../../assets/tateti/nada.gif";
  img9:string="../../../assets/tateti/nada.gif";

  arrayBotones : Array <any> = [
    {nombre: "BtnImg1",lugar:"uno",tipo:"1",id:1},
    {nombre: "BtnImg2",lugar:"dos",tipo:"2",id:2},
    {nombre: "BtnImg3",lugar:"tres",tipo:"3",id:3},
    {nombre: "BtnImg4",lugar:"cuatro",tipo:"4",id:4},
    {nombre: "BtnImg5",lugar:"cinco",tipo:"5",id:5},
    {nombre: "BtnImg6",lugar:"seis",tipo:"6",id:6},
    {nombre: "BtnImg7",lugar:"siete",tipo:"7",id:7},
    {nombre: "BtnImg8",lugar:"ocho",tipo:"8",id:8},
    {nombre: "BtnImg9",lugar:"nueve",tipo:"9",id:9},
];



  BtnImg1:any = document.getElementById("BtnImg1");
  BtnImg2:any = document.getElementById("BtnImg2");
  BtnImg3:any = document.getElementById("BtnImg3");
  BtnImg4:any = document.getElementById("BtnImg4");
  BtnImg5:any = document.getElementById("BtnImg5");
  BtnImg6:any = document.getElementById("BtnImg6");
  BtnImg7:any = document.getElementById("BtnImg7");
  BtnImg8:any = document.getElementById("BtnImg8");
  BtnImg9:any = document.getElementById("BtnImg9");

  constructor() {
    this.nuevoJuego = new JuegoTateti();
    
   }
   juegoOtraVez(){
    this.nuevoJuego = new JuegoTateti();
    this.prenderBotones();
    this.botonJugardeNuevo = false;
    this.labelGanaste = false;
    this.labelPerdiste = false;
    this.labelEmpate = false;
    this.imgX = true;
    this.contador =0;
    this.arrayBotones = [
      {nombre: "BtnImg1",lugar:"uno",tipo:"1",id:1},
      {nombre: "BtnImg2",lugar:"dos",tipo:"2",id:2},
      {nombre: "BtnImg3",lugar:"tres",tipo:"3",id:3},
      {nombre: "BtnImg4",lugar:"cuatro",tipo:"4",id:4},
      {nombre: "BtnImg5",lugar:"cinco",tipo:"5",id:5},
      {nombre: "BtnImg6",lugar:"seis",tipo:"6",id:6},
      {nombre: "BtnImg7",lugar:"siete",tipo:"7",id:7},
      {nombre: "BtnImg8",lugar:"ocho",tipo:"8",id:8},
      {nombre: "BtnImg9",lugar:"nueve",tipo:"9",id:9},
  ];
  this.img1 ="../../../assets/tateti/nada.gif";
  this.img2 ="../../../assets/tateti/nada.gif";
  this.img3 ="../../../assets/tateti/nada.gif";
  this.img4 ="../../../assets/tateti/nada.gif";
  this.img5 ="../../../assets/tateti/nada.gif";
  this.img6 ="../../../assets/tateti/nada.gif";
  this.img7 ="../../../assets/tateti/nada.gif";
  this.img8 ="../../../assets/tateti/nada.gif";
  this.img9 ="../../../assets/tateti/nada.gif";

   }
   
   juegoInicio(){
    this.nuevoJuego = new JuegoTateti();
    this.prenderBotones();
    this.botonComenzar = false;
    this.labelGanaste = false;
    this.labelEmpate = false;

   }

   jugar(valor:number){
    console.log("imgX",this.imgX);
    
     if (this.imgX == true) {
        this.imgX =false;
        this.jugador = this.srcX
        this.tipoJugador = "x"
       
     }else{
      this.imgX = true;
      this.jugador = this.src0
      this.tipoJugador = "o"
     }
      
 
      for (var i = 0; i < this.arrayBotones.length; ++i) {
         	if (this.arrayBotones[i].id == valor) {
            switch (valor) {
                case 1:
                this.arrayBotones[i].tipo =this.tipoJugador;
                this.img1= this.jugador
                break;
                case 2:
                this.arrayBotones[i].tipo = this.tipoJugador;
                this.img2= this.jugador
                break;
                case 3:
                this.arrayBotones[i].tipo =this.tipoJugador;
                this.img3= this.jugador
                break;
                case 4:
                this.arrayBotones[i].tipo = this.tipoJugador;
                this.img4= this.jugador
                break;
                case 5:
                this.arrayBotones[i].tipo =this.tipoJugador;
                this.img5= this.jugador
                break;
                case 6:
                this.arrayBotones[i].tipo =this.tipoJugador;
                this.img6= this.jugador
                break;
                case 7:
                this.arrayBotones[i].tipo =this.tipoJugador;
                this.img7= this.jugador
                break;
                case 8:
                this.arrayBotones[i].tipo =this.tipoJugador;
                this.img8= this.jugador;
                break;
                case 9:
                this.arrayBotones[i].tipo =this.tipoJugador;
                this.img9= this.jugador;
                break;
            }
            console.log(this.arrayBotones[i]);
         	}
        
        console.log(this.arrayBotones);
     }
     this.contador ++;
      this.verificar();
   }

   verificar(){

    if (this.arrayBotones[0].tipo == this.arrayBotones[1].tipo && this.arrayBotones[0].tipo == this.arrayBotones[2].tipo ) {
      this.ganador = this.arrayBotones[0].tipo.toUpperCase();
      if (this.ganador =="X") {
        this.nuevoJuego.gano = true;
        this.labelGanaste = true;
      }else{
        this.nuevoJuego.gano = false;
        this.labelPerdiste = true;
      }
      this.botonJugardeNuevo = true;
      this.enviarJuego.emit(this.nuevoJuego);
      return this.apagarBotones();
      
    }
    if (this.arrayBotones[3].tipo == this.arrayBotones[4].tipo && this.arrayBotones[3].tipo == this.arrayBotones[5].tipo ) {
      this.ganador = this.arrayBotones[3].tipo.toUpperCase();
      if (this.ganador =="X") {
        this.nuevoJuego.gano = true;
        this.labelGanaste = true;
      }else{
        this.nuevoJuego.gano = false;
        this.labelPerdiste = true;
      }
      this.botonJugardeNuevo = true;
      this.enviarJuego.emit(this.nuevoJuego);
      return this.apagarBotones(); 
    }

    if (this.arrayBotones[6].tipo == this.arrayBotones[7].tipo && this.arrayBotones[6].tipo == this.arrayBotones[8].tipo ) {
      this.ganador = this.arrayBotones[6].tipo.toUpperCase();
      if (this.ganador =="X") {
        this.nuevoJuego.gano = true;
        this.labelGanaste = true;
      }else{
        this.nuevoJuego.gano = false;
        this.labelPerdiste = true;
      }
      this.botonJugardeNuevo = true;

      this.enviarJuego.emit(this.nuevoJuego);
      return this.apagarBotones();
    }
    if (this.arrayBotones[0].tipo == this.arrayBotones[3].tipo && this.arrayBotones[0].tipo == this.arrayBotones[6].tipo ) {
      this.ganador = this.arrayBotones[0].tipo.toUpperCase();
      if (this.ganador =="X") {
        this.nuevoJuego.gano = true;
        this.labelGanaste = true;
      }else{
        this.nuevoJuego.gano = false;
        this.labelPerdiste = true;
      }
      this.botonJugardeNuevo = true;
      
      this.enviarJuego.emit(this.nuevoJuego);
      return this.apagarBotones();
      
    }
    if (this.arrayBotones[1].tipo == this.arrayBotones[4].tipo && this.arrayBotones[1].tipo == this.arrayBotones[7].tipo ) {
      this.ganador = this.arrayBotones[1].tipo.toUpperCase();
      if (this.ganador =="X") {
        this.nuevoJuego.gano = true;
        this.labelGanaste = true;
      }else{
        this.nuevoJuego.gano = false;
        this.labelPerdiste = true;
      }
      this.botonJugardeNuevo = true;
      
      this.enviarJuego.emit(this.nuevoJuego);
      return this.apagarBotones();
      
    }
    if (this.arrayBotones[2].tipo == this.arrayBotones[5].tipo && this.arrayBotones[2].tipo == this.arrayBotones[8].tipo ) {
      this.ganador = this.arrayBotones[2].tipo.toUpperCase();
      if (this.ganador =="X") {
        this.nuevoJuego.gano = true;
        this.labelGanaste = true;
      }else{
        this.nuevoJuego.gano = false;
        this.labelPerdiste = true;
      }
      this.botonJugardeNuevo = true;
      
      this.enviarJuego.emit(this.nuevoJuego);
      return this.apagarBotones();
      
    }
    if (this.arrayBotones[0].tipo == this.arrayBotones[4].tipo && this.arrayBotones[0].tipo == this.arrayBotones[8].tipo ) {
      this.ganador = this.arrayBotones[0].tipo.toUpperCase();
      if (this.ganador =="X") {
        this.nuevoJuego.gano = true;
        this.labelGanaste = true;
      }else{
        this.nuevoJuego.gano = false;
        this.labelPerdiste = true;
      }
      this.botonJugardeNuevo = true;
      
      this.enviarJuego.emit(this.nuevoJuego);
      return this.apagarBotones();
      
    }
    if (this.arrayBotones[2].tipo == this.arrayBotones[4].tipo && this.arrayBotones[2].tipo == this.arrayBotones[6].tipo ) {
      this.ganador = this.arrayBotones[2].tipo.toUpperCase();
      if (this.ganador =="X") {
        this.nuevoJuego.gano = true;
        this.labelGanaste = true;
      }else{
        this.nuevoJuego.gano = false;
        this.labelPerdiste = true;
      }
      this.botonJugardeNuevo = true;
      
      this.enviarJuego.emit(this.nuevoJuego);
      return this.apagarBotones();
      
    }
    if (this.contador ==9) {
      this.botonJugardeNuevo = true;
      this.apagarBotones();
      return this.labelEmpate = true;
    }
    

    
   }

   MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    let errorEmail = document.getElementById("msjPuntos");
    if(ganador)
      {
        errorEmail.innerHTML = (`<h3 id='msjPuntos'><kbd class= label-success>${mensaje} <i class="far fa-smile"></i> </kbd></31>`);
      }else{
        errorEmail.innerHTML = (`<h3 id='msjPuntos'><kbd class= label-danger>${mensaje} <i class="far fa-frown"></i></kbd></h3>`);
      }
    var modelo=this;
    setTimeout(function(){ 
      // errorEmail.className = errorEmail.className.replace("show", "");
      errorEmail.innerHTML = "";
     }, 3000);
    console.info("objeto",errorEmail);
    this.botonJugardeNuevo = true;
  
   }

  ngOnInit() {
  }

  apagarBotones()
  {
   let boton1:any = document.getElementById("boton1");
   let boton2:any = document.getElementById("boton2");
   let boton3:any = document.getElementById("boton3");
   let boton4:any = document.getElementById("boton4");
   let boton5:any = document.getElementById("boton5");
   let boton6:any = document.getElementById("boton6");
   let boton7:any = document.getElementById("boton7");
   let boton8:any = document.getElementById("boton8");
   let boton9:any = document.getElementById("boton9");

   boton1.disabled =true;
   boton2.disabled =true;
   boton3.disabled =true;
   boton4.disabled =true;
   boton5.disabled =true;
   boton6.disabled =true;
   boton7.disabled =true;
   boton8.disabled =true;
   boton9.disabled =true;
  }

  prenderBotones()
  {
    let boton1:any = document.getElementById("boton1");
    let boton2:any = document.getElementById("boton2");
    let boton3:any = document.getElementById("boton3");
    let boton4:any = document.getElementById("boton4");
    let boton5:any = document.getElementById("boton5");
    let boton6:any = document.getElementById("boton6");
    let boton7:any = document.getElementById("boton7");
    let boton8:any = document.getElementById("boton8");
    let boton9:any = document.getElementById("boton9");


    boton1.disabled =false;
    boton2.disabled =false;
    boton3.disabled =false;
    boton4.disabled =false;
    boton5.disabled =false;
    boton6.disabled =false;
    boton7.disabled =false;
    boton8.disabled =false;
    boton9.disabled =false;

  }

}
