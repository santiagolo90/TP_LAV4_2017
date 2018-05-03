import { Juego } from '../clases/juego';

export class JuegoAgilidad extends  Juego {

    public numeroUno:number;
    public numeroUnoIMG:string ="../../../assets/imagenes/mate/duda.gif";
    public numeroDos:number;
    public numeroDosIMG:string="../../../assets/imagenes/mate/duda.gif";
    public operador:string;
    public operadorAux:number;
    public operadorIMG:string = "../../../assets/imagenes/mate/sumar.gif";
    public resultado:number;
    public respuesta:boolean;

    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Velocidad aritmetica",gano,jugador);
     
   
      }



    randomNumeroOperador(){
    this.numeroUno = Math.floor( Math.random()*10)+1;
    this.numeroUnoIMG ="../../../assets/imagenes/mate/"+this.numeroUno+".gif"
    this.numeroDos = Math.floor( Math.random()*10)+1;
    this.numeroDosIMG ="../../../assets/imagenes/mate/"+this.numeroDos+".gif"
    this.operadorAux = Math.floor( Math.random()*4)+1;
    switch (this.operadorAux) {
    	case 1:
    		this.operador = "+";
            this.operadorIMG ="../../../assets/imagenes/mate/sumar.gif"
    		this.resultado = this.numeroUno + this.numeroDos;
    		break;
    	case 2:
    		this.operador = "-";
            this.operadorIMG ="../../../assets/imagenes/mate/restar.gif"
    		this.resultado = this.numeroUno - this.numeroDos;
    		break;	
    	case 3:
    		this.operador ="x";
            this.operadorIMG ="../../../assets/imagenes/mate/multiplicar.gif"
    		this.resultado = this.numeroUno * this.numeroDos;
    		break;
    	case 4:
            this.operador ="/";
            this.operadorIMG ="../../../assets/imagenes/mate/dividir.gif"
    		this.resultado = this.numeroUno / this.numeroDos;
    		break;	
    	}
	}

	calcular(numeroAux:number):boolean{

        if(this.resultado == numeroAux)
        {
            this.gano =true;
            this.respuesta =true;
        }
		else{
            this.gano =false;
            this.respuesta =false;
        }
			

		return this.respuesta;

	}

     verificar() {
      
      return false;  
     }

	


}
