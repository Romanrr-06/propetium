import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['catalogo.page.scss'],
})
export class CatalogoPage  {
  public x:  any;


  public push: any;
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
    // {
    //   nombre: 'Casa',
    //   descripcion: 'Descripción de la Casa 4',
    //   imagenes: ['URL_imagen_4_1.jpg', 'URL_imagen_4_2.jpg', 'URL_imagen_4_3.jpg'],
    //   imagenActual: 0,
    //   precio: '$130,000',
    // },
    // {
    //   nombre: 'Casa',
    //   descripcion: 'Descripción de la Casa 5',
    //   imagenes: ['URL_imagen_5_1.jpg', 'URL_imagen_5_2.jpg', 'URL_imagen_5_3.jpg'],
    //   imagenActual: 0,
    //   precio: '$110,000',
    // },
  

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


// valor= 'nombre';
//   routingViaNavParms () {
//     this.navCtrl.navigateForward(['/tienda', this.valor]);
// //     }
//   masinformacion(){
    
//   }
constructor(private searchService: SearchService) {}

// ...

ngOnInit(): void {
  this.searchService.searchQuery$.subscribe((query: any) => {
    // Handle the search query, e.g., filter items based on the query
    console.log('Search Query:', query);
  });
}  
}

