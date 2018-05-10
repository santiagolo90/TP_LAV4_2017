import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loginActual:boolean;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("jugador") =="" || localStorage.getItem("jugador")== null) {
      this.loginActual =true;
    }
    else{
      this.loginActual =false;
    }
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'PPT':
          this.router.navigate(['/Juegos/PPT']);
        break;
        case 'Anagrama':
        this.router.navigate(['/Juegos/Anagrama']);
        break;
        case 'AnagramaMasListado':
        this.router.navigate(['/Juegos/AnagramaMasListado']);
        break;
      case 'Sonido':
          this.router.navigate(['/Juegos/Sonido']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
        case 'Tateti':
          this.router.navigate(['/Juegos/Tateti']);
        break;
    }
  }
  cerrarSesion()
  {
    localStorage.clear();
    this.router.navigate(['/Login']);
  }

}
