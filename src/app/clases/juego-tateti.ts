import { Juego } from '../clases/juego';

export class JuegoTateti extends Juego {




    constructor(nombre?: string, gano?: boolean, jugador?:string) {
        super("Ta Te Ti",gano,jugador);
      }

      public verificar(): boolean {
        throw new Error("Method not implemented.");
    }
}