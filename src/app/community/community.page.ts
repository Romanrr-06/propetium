import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {
  mensaje: string = "";
  mensajes: string[] = [];
  palabrasProhibidas: string[] = ['palabra1', 'palabra2', 'palabra3']; // Agrega las palabras que quieras prohibir

  constructor() {}

  ngOnInit() {}

  publicarMensaje() {
    if (this.mensaje.trim() ) {
      if (this.contienePalabraProhibida(this.mensaje)) {
        console.log("Mensaje bloqueado: Contiene una palabra prohibida");
        // Aquí puedes agregar lógica para mostrar un mensaje de baneo
        // o tomar acciones adicionales.
      } else {
        console.log("Mensaje publicado:", this.mensaje);
        this.mensajes.push(this.mensaje);
        this.mensaje = "";
      }
    } else {
      console.log("Error: El mensaje no puede estar vacío");
    }
  }

  contienePalabraProhibida(mensaje: string): boolean {
    return this.palabrasProhibidas.some((palabra) =>
      mensaje.toLowerCase().includes(palabra.toLowerCase())
    );
  }
}
