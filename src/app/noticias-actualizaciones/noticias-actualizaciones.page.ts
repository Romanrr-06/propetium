import { Component, OnInit } from '@angular/core';
  @Component({
    selector: 'app-noticias-actualizaciones',
    templateUrl: './noticias-actualizaciones.page.html',
    styleUrls: ['./noticias-actualizaciones.page.scss'],
  })
  export class NoticiasActualizacionesPage {
    noticias = [
      { 
        titulo: 'Noticia 1', 
        contenido: 'Contenido de la noticia 1', 
        imagen: 'url-a-la-imagen-1.jpg' 
      },
      { 
        titulo: 'Noticia 2', 
        contenido: 'Contenido de la noticia 2', 
        imagen: 'url-a-la-imagen-2.jpg' 
      },
      { 
        titulo: 'Noticia 3', 
        contenido: 'Contenido de la noticia 3', 
        imagen: 'url-a-la-imagen-3.jpg' 
      },
    ];
  
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
