import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  loginActual:boolean;
  usuarioRegistro:string;
  claveRegistro:string;
  claveRegistro2:string;
  spinerRegistro:boolean =false;
  Mensajes:string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private MiAuth:AngularFireAuth,
    public snackBar: MatSnackBar) { 
    
    
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

  async Registrar(){
    if(this.claveRegistro != null && this.claveRegistro.length > 5){

      if(this.usuarioRegistro != null && this.usuarioRegistro != ""){
        if (this.claveRegistro == this.claveRegistro2){
          this.spinerRegistro= true;
          await this.MiAuth.auth.createUserWithEmailAndPassword(this.usuarioRegistro,this.claveRegistro)
          .then(result =>{
  
            this.MostarMensaje("Se registro correctamente "+this.usuarioRegistro,true,'msjRegistro')
            this.spinerRegistro= false;
            document.getElementById('id01').style.display='none'
            //this.router.navigate(['/Login']);
          })
          .catch(error =>{
           console.log(error);
           this.spinerRegistro= false;
           if (error.message == "The email address is badly formatted." ) {
            return this.MostarMensaje("El correo tiene un formate incorrecto",false,'msjLogin');
           }
           if (error.message == "The email address is already in use by another account." ) {
            return this.MostarMensaje("El correo ya se encuentra registado",false,'msjLogin');
           }
          //  setTimeout(() => {
          //  this.showAlert(error.message, "Error al registrarse");
          //  }, 500);
          })
          
        }else{
          return this.MostarMensaje("Las clave no coinciden",false,'msjLogin');
        }
      }else{
        return this.MostarMensaje("Debe ingresar un correo",false,'msjLogin');
      }
    }else{
        return this.MostarMensaje("Contraseña no debe ser menor a 6 caracteres",false,'msjLogin');
      }
  }
  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false,tipo:string) {
    this.Mensajes=mensaje;    
    let errorEmail = document.getElementById(tipo);
    if(ganador)
      {
        errorEmail.innerHTML = (`<h4 id='${tipo}'><kbd class= label-success>${mensaje} <i class="far fa-smile"></i> </kbd></h4>`);
      }else{
        errorEmail.innerHTML = (`<h4 id='${tipo}'><kbd class= label-danger>${mensaje} <i class="far fa-frown"></i></kbd></h4>`);
      }
    var modelo=this;
    setTimeout(function(){ 
      // errorEmail.className = errorEmail.className.replace("show", "");
      errorEmail.innerHTML = "";
     }, 3000);
    console.info("objeto",errorEmail);
  
   } 
  

}

