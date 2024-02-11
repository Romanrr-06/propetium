import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CryptoGameService } from '../services/crypto-game.service';
import { TiendaService } from '../services/tienda.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
  providers: [TiendaService],
})
  export class TiendaPage implements OnInit {
    public x: any;
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

    private puntosEnTienda: number = 0;

    constructor(
      private toastController: ToastController,
      private router: Router,
      private cryptoGameService: CryptoGameService,
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
        this.presentToast('Artículo comprado con éxito');
      } else {
        this.presentToast('No tienes suficientes puntos en la tienda para comprar este artículo');
      }
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
