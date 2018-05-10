import { Component, OnInit } from '@angular/core';
import { Juego } from '../../clases/juego';

@Component({
  selector: 'app-tateti-mas-listado',
  templateUrl: './tateti-mas-listado.component.html',
  styleUrls: ['./tateti-mas-listado.component.css']
})
export class TatetiMasListadoComponent implements OnInit {

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
