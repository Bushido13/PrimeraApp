import { Component, inject } from '@angular/core';
import { AnimationController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  usuario:string = '';
  password: string ='' ;
  animacion = inject(AnimationController)

  constructor(private navCtrl: NavController) {}

  ionViewWillEnter() {
    this.usuario = '';
    this.password = '';
  }
  ingresar(){
    if(this.password == '123' && this.usuario == "Alumno"){
      this.navCtrl.navigateForward(['/bienvenida', { usuario: this.usuario }]);
    }
  }

 
 
  }




