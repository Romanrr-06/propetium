import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {

  public x: any;
  catalogoItems = [
    {
      id: 1,
      nombre: 'Casa',
      descripcion: 'Descripción de la Casa 1',
      imagenes: ['assets/houses index/house index 7.jpeg', 'assets/houses index/house-inde--7.jpeg', 'assets/houses index/houses-index-7.jpeg', 'assets/houses index/indexhouse 7.jpeg'],
      imagenActual: 0,
      precio: '$100,000',
    },
    {
      id: 2,
      nombre: 'Casa',
      descripcion: 'Descripción de la Casa 2',
      imagenes: ['assets/houses index/house1.png', 'assets/houses index/house1-1-.png', 'assets/houses index/house1-.png', 'assets/houses index/house1--.png', 'assets/houses index/house1---.png'],
      imagenActual: 0,
      precio: '$150,000',
    },
    {
      id: 3,
      nombre: 'Casa',
      descripcion: 'Descripción de la Casa 3',
      imagenes: ['assets/houses index/house2l.png', 'assets/houses index/house2l-1.png', 'assets/houses index/house2.png', 'assets/houses index/house2-12.png', 'assets/houses index/house2-1.png', 'assets/houses index/house2-.png','assets/houses index/house2--2png.png','assets/houses index/house2--.png', 'assets/houses index/house2---png.png','assets/houses index/house2---1.png',],  
      imagenActual: 0,
      precio: '$120,000',
    },
  ]
  

  constructor(private cartService: CartService, private toastController: ToastController, private router: Router) {}

  ngOnInit() {
    // Inicializaciones y lógica de inicio si es necesario
  }

  cambiarImagenSiguiente(item: any) {
    if (item.imagenActual < item.imagenes.length - 1) {
      item.imagenActual++;
    } else {
      item.imagenActual = 0;
    }
  }

  cambiarImagenAnterior(item: any) {
    if (item.imagenActual > 0) {
      item.imagenActual--;
    } else {
      item.imagenActual = item.imagenes.length - 1;
    }
  }
  addToCart(item: any) {
    this.cartService.addToCart(item);
    this.presentToast('Item agregado al carrito');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  // Función para ir a la página del carrito
  goToCart() {
    this.router.navigate(['/cart']);
  }

}
