import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
  }
  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
      case 'Anagrama':
        this.router.navigate(['/Juegos/Anagrama']);
      break;
      case 'AnagramaMasListado':
      this.router.navigate(['/Juegos/AnagramaMasListado']);
      break;
      case 'PPT':
        this.router.navigate(['/Juegos/PPT']);
      break;
      case 'Sonido':
        this.router.navigate(['/Juegos/Sonido']);
      break;   
    }
  }
}
