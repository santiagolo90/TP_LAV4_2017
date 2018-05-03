import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';

@Component({
  selector: 'app-piedra-papel-tijera-mas-listado',
  templateUrl: './piedra-papel-tijera-mas-listado.component.html',
  styleUrls: ['./piedra-papel-tijera-mas-listado.component.css']
})
export class PiedraPapelTijeraMasListadoComponent implements OnInit {
  public listadoParaCompartir: Array<any>;

  constructor() {this.listadoParaCompartir = new Array<any>() }

  ngOnInit() {
  }

  tomarJuegoTerminado(juego: Juego)
  {
    this.listadoParaCompartir.push(juego);
    console.info("en app",this.listadoParaCompartir);
  }

}
