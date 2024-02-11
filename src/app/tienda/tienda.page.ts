// tienda.page.ts

import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TiendaService } from '../services/tienda.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
  providers: [TiendaService],
})
export class TiendaPage implements OnInit {
  public puntosEnTienda: number = 0;

  public catalogoItems: any[] = [
          {
            id: 1,
            nombre: 'Casa',
            descripcion: 'Descripción de la Casa 1',
            imagenes: [
              'assets/houses index/house index 7.jpeg',
              'assets/houses index/house-inde--7.jpeg',
              'assets/houses index/houses-index-7.jpeg',
              'assets/houses index/indexhouse 7.jpeg',
            ],
            imagenActual: 0,
            precio: '$100,000',
          },
          {
            id: 2,
            nombre: 'Casa',
            descripcion: 'Descripción de la Casa 2',
            imagenes: [
              'assets/houses index/house1.png',
              'assets/houses index/house1-1-.png',
              'assets/houses index/house1-.png',
              'assets/houses index/house1--.png',
              'assets/houses index/house1---.png',
            ],
            imagenActual: 0,
            precio: '$150,000',
          },
          {
            id: 3,
            nombre: 'Casa',
            descripcion: 'Descripción de la Casa 3',
            imagenes: [
              'assets/houses index/house2l.png',
              'assets/houses index/house2l-1.png',
              'assets/houses index/house2.png',
              'assets/houses index/house2-12.png',
              'assets/houses index/house2-1.png',
              'assets/houses index/house2-.png',
              'assets/houses index/house2--2png.png',
              'assets/houses index/house2--.png',
              'assets/houses index/house2---png.png',
              'assets/houses index/house2---1.png',
            ],
            imagenActual: 0,
            precio: '$120,000',
          },

        ];
      
    // ... (añade más items si es necesario)


  constructor(
    private toastController: ToastController,
    private router: Router,
    private tiendaService: TiendaService
  ) {}

  ngOnInit() {
    this.getPuntosEnTienda();
  }

  getPuntosEnTienda() {
    this.puntosEnTienda = this.tiendaService.getPuntosEnTienda();
  }

  comprarItem(item: any) {
    const puntosRequeridos = 50;

    if (this.puntosEnTienda >= puntosRequeridos) {
      this.tiendaService.transferirPuntosAlCarrito(puntosRequeridos);
      this.getPuntosEnTienda();
      this.presentToast('Artículo comprado con éxito');
    } else {
      this.presentToast('No tienes suficientes puntos en la tienda para comprar este artículo');
    }
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  cambiarImagenAnterior(item: any) {
    item.imagenActual = (item.imagenActual > 0) ? item.imagenActual - 1 : item.imagenes.length - 1;
  }

  cambiarImagenSiguiente(item: any) {
    item.imagenActual = (item.imagenActual < item.imagenes.length - 1) ? item.imagenActual + 1 : 0;
  }

  addToCart(item: any) {
    this.comprarItem(item);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
