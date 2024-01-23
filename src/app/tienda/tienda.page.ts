import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})

export class TiendaPage implements OnInit {
  catalogoItems = [
    {
      nombre: 'Casa',
      descripcion: 'Descripción de la Casa 1',
      imagenes: ['assets/houses index/house index 7.jpeg', 'assets/houses index/house-inde--7.jpeg', 'assets/houses index/houses-index-7.jpeg', 'assets/houses index/indexhouse 7.jpeg'],
      imagenActual: 0,
      precio: '$100,000',
    },
    {
      nombre: 'Casa',
      descripcion: 'Descripción de la Casa 2',
      imagenes: ['assets/houses index/house1.png', 'assets/houses index/house1-1-.png', 'assets/houses index/house1-.png', 'assets/houses index/house1--.png', 'assets/houses index/house1---.png'],
      imagenActual: 0,
      precio: '$150,000',
    },
    {
      nombre: 'Casa',
      descripcion: 'Descripción de la Casa 3',
      imagenes: ['assets/houses index/house2l.png', 'assets/houses index/house2l-1.png', 'assets/houses index/house2.png', 'assets/houses index/house2-12.png', 'assets/houses index/house2-1.png', 'assets/houses index/house2-.png','assets/houses index/house2--2png.png','assets/houses index/house2--.png', 'assets/houses index/house2---png.png','assets/houses index/house2---1.png',],  
      imagenActual: 0,
      precio: '$120,000',
    },
  ];

  constructor() { }

  ngOnInit() {
  }
}
