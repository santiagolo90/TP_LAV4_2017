import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private subscription: Subscription;
  usuario = '';
  clave= '';
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando:boolean;
  ProgresoDeAncho:string;
  Mensajes:string;

  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";
      this.logeando = true;

  }

  ngOnInit() {
  }

 
  spinerLogin(){
    
    setTimeout(function(){ 
      // errorEmail.className = errorEmail.className.replace("show", "");
      this.logeando=false;
      this.Entrar()
     }, 3000);
  }

  Entrar(){
    
    if (this.usuario === 'admin' && this.clave === 'admin') {
      this.MostarMensaje("Bienvendio!!!"+ this.usuario,true);
      this.router.navigate(['/Principal']);
    }
    else{
      this.MostarMensaje("Error en usuario o contraseña",false);
       
    }
  }

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    let errorEmail = document.getElementById("msjLogin");
    if(ganador)
      {
        errorEmail.innerHTML = (`<h4 id='msjLogin'><kbd class= label-success>${mensaje} <i class="far fa-smile"></i> </kbd></h4>`);
      }else{
        errorEmail.innerHTML = (`<h4 id='msjLogin'><kbd class= label-danger>${mensaje} <i class="far fa-frown"></i></kbd></h4>`);
      }
    var modelo=this;
    setTimeout(function(){ 
      // errorEmail.className = errorEmail.className.replace("show", "");
      errorEmail.innerHTML = "";
     }, 3000);
    console.info("objeto",errorEmail);
  
   } 



    //   login() {
    //     this.loading = true;
    //     this.authenticationService.login(this.model.username, this.model.password)
    //         .subscribe(
    //             data => {
    //                 this.router.navigate([this.returnUrl]);
    //             },
    //             error => {
    //                 this.alertService.error(error);
    //                 this.loading = false;
    //             });
    // }
    //}


}
