import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

interface Noticia {
  titulo: string;
  contenido: string;
  imagen: string;
  expanded: boolean;
  mostrarImagen: boolean;
  usuario: string;
  comentarios: [];
  mostrarComentarios: boolean;
}

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage {
  user: any;
  noticias: Noticia[] = [

  ];
  currentIndex = 0;

  toggleImage(index: number) {
    this.noticias[index].mostrarImagen = !this.noticias[index].mostrarImagen;
  }
 
  toggleNewsContent(index: number) {
    this.noticias[index].expanded = !this.noticias[index].expanded;
  }

  showNextNews() {
    this.currentIndex = (this.currentIndex + 1) % this.noticias.length;
  }

  nuevaNoticia: Noticia = {
    titulo: '',
    contenido: '',
    imagen: '',
    expanded: false,
    mostrarImagen: false,
    usuario: 'Nombre de Usuario',
    comentarios: [],
    mostrarComentarios: true,
  };

  esURLValida(url: string): boolean {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    const isValid = urlRegex.test(url);
    console.log(`URL: ${url}, Valid: ${isValid}`);
    return isValid;
  }

  agregarNoticia() {
    console.log('Intentando agregar noticia:', this.nuevaNoticia);

    if (!this.nuevaNoticia.titulo || !this.nuevaNoticia.contenido) {
      console.error('Por favor, completa todos los campos obligatorios.');
      return;
    }

    if (this.nuevaNoticia.imagen && !this.esURLValida(this.nuevaNoticia.imagen)) {
      console.error('Ingresa una URL de imagen válida.');
      return;
    }

    // Resto del código para agregar la nueva noticia a la lista y ocultar las demás

    this.noticias.forEach((noticia, index) => {
      noticia.expanded = false;
      noticia.mostrarImagen = false;
    });

    this.noticias.push(this.nuevaNoticia);
    this.nuevaNoticia = {
      titulo: '',
      contenido: '',
      imagen: '',
      expanded: false,
      mostrarImagen: false,
      usuario: 'Nombre de Usuario',
      comentarios: [],
      mostrarComentarios: true,
    };
  }
}
