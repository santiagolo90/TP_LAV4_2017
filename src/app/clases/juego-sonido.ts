import { Juego } from '../clases/juego';
export class JuegoSonido extends Juego {

    sonidoAleatorio:string;
    public arraySonidosUsados =[];
    respuesta:string;
    contador:number;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Que animal Es?",gano,jugador);
      }

      arraySonidos : Array <any> = [
        {nombre: "abeja",tipo:".mp3",id:1},
        {nombre: "burro",tipo:".mp3",id:2},
        {nombre: "caballo",tipo:".mp3",id:3},
        {nombre: "cabra",tipo:".mp3",id:4},
        {nombre: "camello",tipo:".mp3",id:5},
        {nombre: "cebra",tipo:".mp3",id:6},
        {nombre: "cerdo",tipo:".mp3",id:7},
        {nombre: "cuervo",tipo:".mp3",id:8},
        {nombre: "delfin",tipo:".mp3",id:9},
        {nombre: "elefante",tipo:".mp3",id:10},
        {nombre: "foca",tipo:".mp3",id:11},
        {nombre: "gallo",tipo:".mp3",id:12},
        {nombre: "gato",tipo:".mp3",id:13},
        {nombre: "grillo",tipo:".mp3",id:14},
        {nombre: "lechuza",tipo:".mp3",id:15},
        {nombre: "leon",tipo:".mp3",id:16},
        {nombre: "lobo",tipo:".mp3",id:17},
        {nombre: "mono",tipo:".mp3",id:18},
        {nombre: "oso",tipo:".mp3",id:19},
        {nombre: "oveja",tipo:".mp3",id:20},
        {nombre: "pajaro",tipo:".mp3",id:21},
        {nombre: "pato",tipo:".mp3",id:22},
        {nombre: "pavo",tipo:".mp3",id:23},
        {nombre: "perro",tipo:".mp3",id:24},
        {nombre: "pinguino",tipo:".mp3",id:25},
        {nombre: "rana",tipo:".mp3",id:26},
        {nombre: "raton",tipo:".mp3",id:27},
        {nombre: "serpiente",tipo:".mp3",id:28},
        {nombre: "tigre",tipo:".mp3",id:29},
        {nombre: "vaca",tipo:".mp3",id:30},
    ];

    public asignarSonido() {  
        this.contador =this.arraySonidos.length -1;
        console.log("contador"+this.contador);
        console.log("arraySonidos.length"+this.arraySonidos.length);
        console.log("arraySonidosUsados.length"+this.arraySonidosUsados.length);
        
             
        let random = Math.floor(Math.random() * this.arraySonidos.length);
        this.sonidoAleatorio = this.arraySonidos[random].nombre;
        this.arraySonidosUsados.push(this.arraySonidos[random]);
        this.arraySonidos.splice(random, 1);
        // console.log(random);
        // console.log(this.sonidoAleatorio);
        // console.log(this.arraySonidosUsados);
        // console.log(this.arraySonidos);
        
        
        //let idAux:number = this.arrayPalabras[random].id;

        // for (var i = 0; i < this.arraySonidos.length; ++i) {
        // 	if (this.arrayPalabras[i].id == idAux) {
        // 		console.log(this.arrayPalabras[i]);
        // 	}
        // }

        //this.palabraAnagramaID =idAux;

        //console.log(this.palabraAnagramaID);

    }


      public verificar():boolean {
          if (this.respuesta == this.sonidoAleatorio) {
              this.respuesta ="";
              return true;
          }
          else{
            this.respuesta ="";
            return false;
          }
    }
}