import { Component, OnInit } from '../../../../node_modules/@angular/core';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor() { 
    
    
  }

  ngOnInit() {
    
  }

  prueba()
  {
    alert("Cerrando")
  }
  

}

