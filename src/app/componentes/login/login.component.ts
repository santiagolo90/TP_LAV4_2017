import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


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
  usuarioRegistro:string;
  claveRegistro:string;
  claveRegistro2:string;
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando:boolean =false;
  ProgresoDeAncho:string;
  Mensajes:string;
  spiner:boolean= false;
  spinerRegistro:boolean =false;

  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private MiAuth:AngularFireAuth) {
      this.progreso=0;
      this.ProgresoDeAncho="0%";
      this.logeando = true;

  }
  autoCompletar(){
    this.usuario = "user@user.com";
    this.clave = "abc123";
    this.iniciarSesion()
  }

  async iniciarSesion(){
    if(this.usuario == null || this.clave == null || this.clave == '' || this.usuario == '')
    {
      return this.MostarMensaje("Debe completar los campos",false,'msjLogin');
    }
    //let spinner = this.cargando();
    this.spiner= true;
    await this.MiAuth.auth.signInWithEmailAndPassword(this.usuario,this.clave)
              .then(result => 
                {
                  //spinner.dismiss();
                  //this.navCtrl.setRoot(VotacionPage, { usuario: this.usuario })
                  console.log(result);
                  this.spiner= false;
                  localStorage.setItem("jugador",result.email);
                  this.MostarMensaje("Bienvenido "+result.email,true,'msjLogin')
                  this.router.navigate(['/Principal']);
                  
                })
              .catch(error =>
                {
                  console.log(error.message);
                  //spinner.dismiss();
                  this.spiner= false;
                  if (error.message == "The email address is badly formatted." ) {
                    return this.MostarMensaje("El correo tiene un formate incorrecto",false,'msjLogin');
                  }
                  if (error.message == "The password is invalid or the user does not have a password." ) {
                    return this.MostarMensaje("Error en la clave",false,'msjLogin');
                  }
                  if (error.message == "There is no user record corresponding to this identifier. The user may have been deleted." ) {
                    return this.MostarMensaje("El usuario no existe o fue eliminado",false,'msjLogin');
                  }
                  setTimeout(() => {

                   }, 500);
                })

  }

  async Registrar(){
    if(this.claveRegistro != null && this.claveRegistro.length > 5){

      if(this.usuarioRegistro != null && this.usuarioRegistro != ""){
        if (this.claveRegistro == this.claveRegistro2){
          this.spinerRegistro= true;
          await this.MiAuth.auth.createUserWithEmailAndPassword(this.usuarioRegistro,this.claveRegistro)
          .then(result =>{
  
            this.MostarMensaje("Se registro correctamente "+this.usuarioRegistro,true,'msj')
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
            return this.MostarMensaje("El correo ya se encuentra registado",false,'msjRegistro');
           }
          //  setTimeout(() => {
          //  this.showAlert(error.message, "Error al registrarse");
          //  }, 500);
          })
          
        }else{
          return this.MostarMensaje("Las clave no coinciden",false,'msjRegistro');
        }
      }else{
        return this.MostarMensaje("Debe ingresar un correo",false,'msjRegistro');
      }
    }else{
        return this.MostarMensaje("Contraseña no debe ser menor a 6 caracteres",false,'msjRegistro');
      }
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

  // cargando() {
  //   let loader = this.loadingCtrl.create({
  //     content: "Cargando...",
  //     duration: 3000
  //   });
  //   return loader;
  // }

  // Entrar(){
    
  //   if (this.usuario === 'admin' && this.clave === 'admin') {
  //     this.MostarMensaje("Bienvendio!!!"+ this.usuario,true);
  //     this.router.navigate(['/Principal']);
  //   }
  //   else{
  //     this.MostarMensaje("Error en usuario o contraseña",false);
       
  //   }
  // }

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
