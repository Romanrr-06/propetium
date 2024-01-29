// ruleta.page.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.page.html',
  styleUrls: ['./ruleta.page.scss'],
})
export class RuletaPage implements OnInit {
  public images: string[] = [
    'path/to/image1.jpg',
    'assets/criptos/dash.png',
    'path/to/image3.jpg',
    // Add more image paths as needed
  ];

  spinAllowed = true;
  rotating = false;

  constructor() {}

  ngOnInit() {}

  spinWheel() {
    if (this.spinAllowed && !this.rotating) {
      this.rotating = true;
      const randomIndex = Math.floor(Math.random() * this.images.length);
      const selectedImage = this.images[randomIndex];
      console.log('Imagen seleccionada:', selectedImage);
      this.spinAllowed = false;

      setTimeout(() => {
        this.rotating = false;
        this.disableSpinButtonForADay();
      }, 3000); // Set the timeout duration to match the animation duration
    } else {
      console.log('Solo se permite girar una vez al día.');
    }
  }

  private disableSpinButtonForADay() {
    localStorage.setItem('lastSpinDate', new Date().toISOString());
    // You may want to add logic here to enable the button after 24 hours.
  }
}
