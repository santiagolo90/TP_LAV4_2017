import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';
@Component({
  selector: 'app-juego-sonido-mas-listado',
  templateUrl: './juego-sonido-mas-listado.component.html',
  styleUrls: ['./juego-sonido-mas-listado.component.css']
})
export class JuegoSonidoMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;
  constructor() { this.listadoParaCompartir = new Array<any>()}

  ngOnInit() {
  }

  tomarJuegoTerminado(juego: Juego)
  {
    //this.listadoParaCompartir.push(juego);
    console.log("juego",juego);
    this.listadoParaCompartir.push(juego);
   //console.info("en app",this.listadoParaCompartir);
  }

}
