import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { Juego } from '../../clases/juego';
import { JuegoSonido } from '../../clases/juego-sonido';

@Component({
  selector: 'app-juego-sonido',
  templateUrl: './juego-sonido.component.html',
  styleUrls: ['./juego-sonido.component.css']
})
export class JuegoSonidoComponent implements OnInit {
  @Output() enviarJuego: EventEmitter<any>= new EventEmitter<any>();
  //public audio = document.getElementById('demo');
  nuevoJuego : JuegoSonido;
  botonComenzarVerificar:boolean = true
  botonNuevoJuego:boolean = false
  botonSiguiente:boolean = false;
  botonRepetir:boolean = false;
  botonGenerar:boolean = false;
  labelPuntos:boolean = false;
  labelGanaste:boolean = false;
  puntos:number = 0;
  sonidoRepetir:string;
  nombre:String;
  audio = new Audio();
  Mensajes:string;
  contador:number = 0;
  contadorGanados:number = 30;
  spiner:boolean= false;




  constructor() {
    this.nuevoJuego = new JuegoSonido();
    
   }
   jugarDeNuevo(){
    this.nuevoJuego = new JuegoSonido();
    this.contador =0;
    this.contadorGanados =30;
    this.puntos =0;
    this.labelGanaste = false;
    this.prenderBotones();
    this.generarSonido();
   }

  generarSonido() {
    //this.audio = new Audio('demo');
    this.prenderBotones();
    this.nuevoJuego.asignarSonido();
    this.botonRepetir = true;
    this.botonGenerar = true;
    this.botonComenzarVerificar = false;
    this.botonNuevoJuego = false;
    this.spiner =true;
    // this.botonSiguiente = true;
    this.labelPuntos = true;
    this.sonidoRepetir = "../../../assets/sonidos/"+this.nuevoJuego.sonidoAleatorio+".ogg";
    this.sonido("../../../assets/sonidos/"+this.nuevoJuego.sonidoAleatorio+".ogg")

    // if (this.nuevoJuego.arraySonidosUsados.length==30) {

    //   this.botonNuevoJuego = true;
    //   this.botonRepetir = false;
    //   this.botonGenerar = false;
    //   this.botonComenzarVerificar = false;

    //   this.labelPuntos = false;
    //   this.apagarBotones();
    //   return this.labelGanaste = true;
    // }
   
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
      this.contadorGanados --;
      // this.sonido("../../../assets/sonidos/yes.ogg")
      this.MostarMensaje("Muy Bien!!! +1",true);
      this.sonido("../../../assets/sonidos/yes.ogg");;

       if (this.contadorGanados ==0) {
        this.nuevoJuego.gano=true;
        this.enviarJuego.emit(this.nuevoJuego);
        this.nuevoJuego = new JuegoSonido();
        
        this.botonNuevoJuego = true;
        this.botonRepetir = false;
        this.botonGenerar = false;
        this.botonComenzarVerificar = false;
        this.spiner =false;
  
        this.labelPuntos = false;
        this.apagarBotones();

        // this.botonNuevoJuego = true;
        // this.botonRepetir = false;
        // this.botonGenerar = false;
        // this.botonComenzarVerificar = false;
  
        // this.labelPuntos = false;
        // this.apagarBotones();
        return this.labelGanaste = true;
      }
      setTimeout( () => {
        this.generarSonido();
      }, 1000 );
    }
    else{
      this.puntos --;
      this.contador ++;
      switch (this.contador) {
          case 1:
          this.MostarMensaje("Primer intento!!! -1",false);
          break;

          case 2:
          this.MostarMensaje("Segundo intento.!!! -1",false);
          break;

          case 3:
          this.MostarMensaje("Ultimo intento!!! -1",false);
          break;

          case 4:
          this.MostarMensaje("Perdiste!!!",false);
          this.nuevoJuego.gano=false;
          this.enviarJuego.emit(this.nuevoJuego);
          this.nuevoJuego = new JuegoSonido();
          
          this.botonNuevoJuego = true;
          this.botonRepetir = false;
          this.botonGenerar = false;
          this.botonComenzarVerificar = false;
          this.spiner =false;
    
          this.labelPuntos = false;
          this.apagarBotones();
          break;  
      }
      
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
  
   }
   
   apagarBotones()
   {
    let botonAnimal1:any = document.getElementById("botonAnimal1");
    let botonAnimal2:any = document.getElementById("botonAnimal2");
    let botonAnimal3:any = document.getElementById("botonAnimal3");
    let botonAnimal4:any = document.getElementById("botonAnimal4");
    let botonAnimal5:any = document.getElementById("botonAnimal5");
    let botonAnimal6:any = document.getElementById("botonAnimal6");
    let botonAnimal7:any = document.getElementById("botonAnimal7");
    let botonAnimal8:any = document.getElementById("botonAnimal8");
    let botonAnimal9:any = document.getElementById("botonAnimal9");
    let botonAnimal10:any = document.getElementById("botonAnimal10");
    let botonAnimal11:any = document.getElementById("botonAnimal11");
    let botonAnimal12:any = document.getElementById("botonAnimal12");
    let botonAnimal13:any = document.getElementById("botonAnimal13");
    let botonAnimal14:any = document.getElementById("botonAnimal14");
    let botonAnimal15:any = document.getElementById("botonAnimal15");
    let botonAnimal16:any = document.getElementById("botonAnimal16");
    let botonAnimal17:any = document.getElementById("botonAnimal17");
    let botonAnimal18:any = document.getElementById("botonAnimal18");
    let botonAnimal19:any = document.getElementById("botonAnimal19");
    let botonAnimal20:any = document.getElementById("botonAnimal20");
    let botonAnimal21:any = document.getElementById("botonAnimal21");
    let botonAnimal22:any = document.getElementById("botonAnimal22");
    let botonAnimal23:any = document.getElementById("botonAnimal23");
    let botonAnimal24:any = document.getElementById("botonAnimal24");
    let botonAnimal25:any = document.getElementById("botonAnimal25");
    let botonAnimal26:any = document.getElementById("botonAnimal26");
    let botonAnimal27:any = document.getElementById("botonAnimal27");
    let botonAnimal28:any = document.getElementById("botonAnimal28");
    let botonAnimal29:any = document.getElementById("botonAnimal29");
    let botonAnimal30:any = document.getElementById("botonAnimal30");

    botonAnimal1.disabled =true;
    botonAnimal2.disabled =true;
    botonAnimal3.disabled =true;
    botonAnimal4.disabled =true;
    botonAnimal5.disabled =true;
    botonAnimal6.disabled =true;
    botonAnimal7.disabled =true;
    botonAnimal8.disabled =true;
    botonAnimal9.disabled =true;
    botonAnimal10.disabled =true;
    botonAnimal11.disabled =true;
    botonAnimal12.disabled =true;
    botonAnimal13.disabled =true;
    botonAnimal14.disabled =true;
    botonAnimal15.disabled =true;
    botonAnimal16.disabled =true;
    botonAnimal17.disabled =true;
    botonAnimal18.disabled =true;
    botonAnimal19.disabled =true;
    botonAnimal20.disabled =true;
    botonAnimal21.disabled =true;
    botonAnimal22.disabled =true;
    botonAnimal23.disabled =true;
    botonAnimal24.disabled =true;
    botonAnimal25.disabled =true;
    botonAnimal26.disabled =true;
    botonAnimal27.disabled =true;
    botonAnimal28.disabled =true;
    botonAnimal29.disabled =true;
    botonAnimal30.disabled =true;
   }

   prenderBotones()
   {
    let botonAnimal1:any = document.getElementById("botonAnimal1");
    let botonAnimal2:any = document.getElementById("botonAnimal2");
    let botonAnimal3:any = document.getElementById("botonAnimal3");
    let botonAnimal4:any = document.getElementById("botonAnimal4");
    let botonAnimal5:any = document.getElementById("botonAnimal5");
    let botonAnimal6:any = document.getElementById("botonAnimal6");
    let botonAnimal7:any = document.getElementById("botonAnimal7");
    let botonAnimal8:any = document.getElementById("botonAnimal8");
    let botonAnimal9:any = document.getElementById("botonAnimal9");
    let botonAnimal10:any = document.getElementById("botonAnimal10");
    let botonAnimal11:any = document.getElementById("botonAnimal11");
    let botonAnimal12:any = document.getElementById("botonAnimal12");
    let botonAnimal13:any = document.getElementById("botonAnimal13");
    let botonAnimal14:any = document.getElementById("botonAnimal14");
    let botonAnimal15:any = document.getElementById("botonAnimal15");
    let botonAnimal16:any = document.getElementById("botonAnimal16");
    let botonAnimal17:any = document.getElementById("botonAnimal17");
    let botonAnimal18:any = document.getElementById("botonAnimal18");
    let botonAnimal19:any = document.getElementById("botonAnimal19");
    let botonAnimal20:any = document.getElementById("botonAnimal20");
    let botonAnimal21:any = document.getElementById("botonAnimal21");
    let botonAnimal22:any = document.getElementById("botonAnimal22");
    let botonAnimal23:any = document.getElementById("botonAnimal23");
    let botonAnimal24:any = document.getElementById("botonAnimal24");
    let botonAnimal25:any = document.getElementById("botonAnimal25");
    let botonAnimal26:any = document.getElementById("botonAnimal26");
    let botonAnimal27:any = document.getElementById("botonAnimal27");
    let botonAnimal28:any = document.getElementById("botonAnimal28");
    let botonAnimal29:any = document.getElementById("botonAnimal29");
    let botonAnimal30:any = document.getElementById("botonAnimal30");

    botonAnimal1.disabled =false;
    botonAnimal2.disabled =false;
    botonAnimal3.disabled =false;
    botonAnimal4.disabled =false;
    botonAnimal5.disabled =false;
    botonAnimal6.disabled =false;
    botonAnimal7.disabled =false;
    botonAnimal8.disabled =false;
    botonAnimal9.disabled =false;
    botonAnimal10.disabled =false;
    botonAnimal11.disabled =false;
    botonAnimal12.disabled =false;
    botonAnimal13.disabled =false;
    botonAnimal14.disabled =false;
    botonAnimal15.disabled =false;
    botonAnimal16.disabled =false;
    botonAnimal17.disabled =false;
    botonAnimal18.disabled =false;
    botonAnimal19.disabled =false;
    botonAnimal20.disabled =false;
    botonAnimal21.disabled =false;
    botonAnimal22.disabled =false;
    botonAnimal23.disabled =false;
    botonAnimal24.disabled =false;
    botonAnimal25.disabled =false;
    botonAnimal26.disabled =false;
    botonAnimal27.disabled =false;
    botonAnimal28.disabled =false;
    botonAnimal29.disabled =false;
    botonAnimal30.disabled =false;
   }

  ngOnInit() {
  }

}
