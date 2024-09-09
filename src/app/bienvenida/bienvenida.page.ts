import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage implements OnInit {

  usuario: string = '';
  pass: string = '';
  animacion = inject(AnimationController);

  anim1;
  
  

 

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.usuario = params['usuario'];
    });
    this.anim1 = this.animacion.create()
    .duration(1000) 
    .fromTo('transform', 'scale(0.5)', 'scale(1)') 
    .fromTo('opacity', '0', '1'); 
  }

  ngOnInit() {
  }
  ionViewDidEnter(): void {
    
    const el = document.querySelector('#mensajeBienvenida')!;
    this.anim1.addElement(el);
    this.animar();
  }

  ngAfterViewInit(): void {
    const el = document.querySelector('#mensajeBienvenida')!;
    this.anim1.addElement(el);
  }

  ingresar() {
    if (this.pass === '123') {
      this.animar();
    } else {
      alert('No autorizado');
    }
  }

  animar() {
    this.anim1.play();
  }
  

}
