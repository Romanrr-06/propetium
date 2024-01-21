import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.page.html',
  styleUrls: ['./ruleta.page.scss'],
})
export class RuletaPage implements OnInit {
 public  images: string[] = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Agrega las rutas de tus imágenes
  spinAllowed = true;

  constructor() {}

  ngOnInit() {}

  spinWheel() {
    if (this.spinAllowed) {
      
      const randomIndex = Math.floor(Math.random() * this.images.length);
      const selectedImage = this.images[randomIndex];
      console.log('Imagen seleccionada:', selectedImage);
      this.spinAllowed = false;
      localStorage.setItem('lastSpinDate', new Date().toISOString());
    } else {
      console.log('Solo se permite girar una vez al día.');
    }
  }
}

