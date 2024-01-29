import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {
  mensaje: string = "";  // Variable para almacenar el mensaje

  constructor() { }

  ngOnInit() {
  }

  publicarMensaje() {
    if (this.mensaje.trim() !== "") {
      console.log("Mensaje publicado:", this.mensaje);
      this.mensaje = "";
    } else {
      console.log("Error: El mensaje no puede estar vacío");
    }
  }
}
