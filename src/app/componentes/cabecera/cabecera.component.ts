import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  loginActual:boolean;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    
    
  }

  ngOnInit() {
    if (localStorage.getItem("jugador") =="" || localStorage.getItem("jugador")== null) {
      this.loginActual =true;
    }
    else{
      this.loginActual =false;
    }
    
  }

  cerrarSesion()
  {
    localStorage.clear();
    this.router.navigate(['/Login']);
  }
  

}

