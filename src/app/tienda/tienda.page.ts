import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})

export class TiendaPage implements OnInit {
  public x:  any;
  public push: any;
  public item: any;
  Items = [
    {
      id: 1,
      nombre: 'Casa 1',
      descripcion: 'Descripción de la Casa 1',
      imagenes: ['assets/houses index/house index 7.jpeg', '...'],
      imagenActual: 0,
      precio: '$100,000',
    },
    {
      id: 2,
      nombre: 'Casa 2',
      descripcion: 'Descripción de la Casa 2',
      imagenes: ['assets/houses index/house1.png', '...'],
      imagenActual: 0,
      precio: '$150,000',
    },
    {
      id: 3,
      nombre: 'Casa 3',
      descripcion: 'Descripción de la Casa 3',
      imagenes: ['assets/houses index/house2l.png', '...'],
      imagenActual: 0,
      precio: '$120,000',
    },
  ];
  
  activatedRoute: any;

  constructor(public route: ActivatedRoute) {}

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

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const nombre = params['nombre'];
      console.log('Nombre Parameter:', nombre); // Log the received parameter

      
      this.item = this.Items.find((i) => i.id == nombre);

      if (this.item) {
        console.log('Selected Item:', JSON.stringify(this.item)); // Log the selected item
      } else {
        console.log('Item not found!');
      }
    });
  }
  
  }
  
  