import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualizaciones',
  templateUrl: './actualizaciones.page.html',
  styleUrls: ['./actualizaciones.page.scss'],
})
export class ActualizacionesPage implements OnInit {

  actualizaciones = [
    { 
      titulo: 'Actualización 1', 
      contenido: 'Detalles de la actualización 1', 
      imagen: 'url-a-la-imagen-4.jpg' 
    },
    { 
      titulo: 'Actualización 2', 
      contenido: 'Detalles de la actualización 2', 
      imagen: 'url-a-la-imagen-5.jpg' 
    },
    { 
      titulo: 'Actualización 3', 
      contenido: 'Detalles de la actualización 3', 
      imagen: 'url-a-la-imagen-6.jpg' 
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
