import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre: string = '';
  carrera: string = '';
  jornada: string = '';
  correo: string = '';
  pass: string = '';
  constructor(private alertController: AlertController) { }

  async registrarse() {
    
    this.nombre = '';
    this.carrera = '';
    this.jornada = '';
    this.correo = '';
    this.pass = '';

    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Alumno registrado',
      buttons: ['OK']
    });

    await alert.present();
  }
  
  ngOnInit() {
  }

}
