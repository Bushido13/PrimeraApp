import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recupera',
  templateUrl: './recupera.page.html',
  styleUrls: ['./recupera.page.scss'],
})
export class RecuperaPage implements OnInit {

  correo: string = '';
  
  constructor(private alertController: AlertController) { }

  async recuperar() {
    
    this.correo = '';

    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Correo Enviado',
      buttons: ['OK']
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
