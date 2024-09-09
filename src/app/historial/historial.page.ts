import { Component } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage {

  asistencias: { fecha: string, estado: string }[] = [];

  constructor() {
    this.asistencias = [
      { fecha: '13-08-2024', estado: 'Presente' },
      { fecha: '20-08-2024', estado: 'Ausente' },
      { fecha: '27-08-2024', estado: 'Presente' },
      // Agrega más datos según sea necesario
    ];
  }

 
}
