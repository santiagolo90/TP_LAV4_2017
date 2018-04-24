import { Juego } from '../clases/juego';
export class JuegoAnagrama extends Juego {

	respuestaIngresada : string;
    respuesta : string;
    palabraAnagrama="";
    palabraAnagramaID:number;
    palabraIngresada="";

	constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Anagrama",gano,jugador);
      }

      arrayPalabras : Array <any> = [
        {palabra: "amor",id:1},
        {palabra: "armo",id:1},
        {palabra: "maro",id:1},
        {palabra: "mora",id:1},
        {palabra: "ramo",id:1},
        {palabra: "roma",id:1},
        {palabra: "agatinos",id:2},
        {palabra: "agonista",id:2},
        {palabra: "atosigan",id:2},
        {palabra: "santiago",id:2},
        {palabra: "nicolas",id:3},
        {palabra: "alcinos",id:3},
        {palabra: "colinas",id:3},
        {palabra: "oliscan",id:3},
        {palabra: "oscilan",id:3},
        {palabra: "drope",id:4},
        {palabra: "pedro",id:4},
        {palabra: "poder",id:4},
        {palabra: "podre",id:4},
        {palabra: "amarino",id:5},
        {palabra: "aminora",id:5},
        {palabra: "mariano",id:5},
        {palabra: "mariona",id:5},
        {palabra: "ominara",id:5},
        {palabra: "rata",id:6},
        {palabra: "atar",id:6},
        {palabra: "tara",id:6},


    ];
	

	public asignarPalabra() {       
        let random = Math.floor(Math.random() * this.arrayPalabras.length);
        let idAux:number = this.arrayPalabras[random].id;
        //console.log(idAux);
        for (var i = 0; i < this.arrayPalabras.length; ++i) {
        	if (this.arrayPalabras[i].id == idAux) {
        		console.log(this.arrayPalabras[i]);
        	}
        }
        this.palabraAnagrama = this.arrayPalabras[random].palabra;
        this.palabraAnagramaID =idAux;
        console.log(this.palabraAnagrama);
        console.log(this.palabraAnagramaID);

    }

    public verificar() {
    	let idPalabraIngresada:number;
    	for (var i = 0; i < this.arrayPalabras.length; ++i) {
    		if (this.arrayPalabras[i].palabra == this.palabraIngresada) {
    			idPalabraIngresada = this.arrayPalabras[i].id;
    			break;
    		}
    	}

    	if (idPalabraIngresada == this.palabraAnagramaID ) {
    		this.gano = true;
    		this.palabraAnagrama ="";
    		this.palabraIngresada ="";
    		this.palabraAnagramaID=0;
    	}
        if (this.gano) {
          return true;
        } else {
          return false;
        }
    }
}
