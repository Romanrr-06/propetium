// noticias.page.ts

import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

interface Noticia {
  titulo: string;
  contenido: string;
  imagen: string;
  imagenFile: File | null;
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
  noticias: Noticia[] = [];
  currentIndex = 0;
  mostrarTutorial = true;

  nuevaNoticia: Noticia = {
    titulo: '',
    contenido: '',
    imagen: '',
    imagenFile: null,
    expanded: false,
    mostrarImagen: false,
    usuario: 'Nombre de Usuario',
    comentarios: [],
    mostrarComentarios: true,
  };

  constructor(private sanitizer: DomSanitizer) {}

  toggleImage(index: number): void {
    this.noticias[index].mostrarImagen = !this.noticias[index].mostrarImagen;
  }

  toggleNewsContent(index: number): void {
    this.noticias[index].expanded = !this.noticias[index].expanded;
  }

  showNextNews(): void {
    this.currentIndex = (this.currentIndex + 1) % this.noticias.length;
  }

  async handleImageUpload(event: any): Promise<void> {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.nuevaNoticia.imagen = e.target.result;
        this.nuevaNoticia.imagenFile = file;
      };
      await this.readAsDataURL(reader, file);
    }
  }

  private readAsDataURL(reader: FileReader, file: File): Promise<void> {
    return new Promise<void>((resolve) => {
      reader.readAsDataURL(file);
      reader.onloadend = () => resolve();
    });
  }

  agregarNoticia(): void {
    const { titulo, contenido, imagen, imagenFile } = this.nuevaNoticia;

    if (!titulo || !contenido) {
      console.error('Por favor, completa todos los campos obligatorios.');
      return;
    }

    if (imagenFile) {
      this.handleImageFile();
    } else if (imagen && this.esURLValida(imagen)) {
      this.pushNoticiaWithImageURL();
    } else {
      console.error('Ingresa una imagen o URL válida.');
    }

    this.resetNuevaNoticia();
  }

  private handleImageFile(): void {
    this.noticias.push({ ...this.nuevaNoticia, imagen: this.nuevaNoticia.imagen });
  }

  private pushNoticiaWithImageURL(): void {
    this.noticias.push(this.nuevaNoticia);
  }

  private resetNuevaNoticia(): void {
    this.noticias.forEach((noticia) => {
      noticia.expanded = false;
      noticia.mostrarImagen = false;
    });

    this.nuevaNoticia = {
      titulo: '',
      contenido: '',
      imagen: '',
      imagenFile: null,
      expanded: false,
      mostrarImagen: false,
      usuario: 'Nombre de Usuario',
      comentarios: [],
      mostrarComentarios: true,
    };
  }

  esURLValida(url: string): boolean {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlRegex.test(url);
  }

  handleDragOver(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
  }

  handleDragLeave(event: any): void {
    event.preventDefault();
    event.stopPropagation();
    // Add visual styles if needed
  }

  handleDrop(event: any): void {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.handleImageUpload({ target: { files: [files[0]] } });
    }

    // Restore visual styles if needed
  }

  finalizarTutorial(): void {
    this.mostrarTutorial = false;
  }
}
