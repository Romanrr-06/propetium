import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';




@Component({

  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage implements OnInit {
  public mensaje: string = '';
  public mensajes: string[] = [];
  public palabrasProhibidas: string[] = ['palabra1', 'palabra2', 'palabra3'];
  public user: any;

  constructor(public auth: AuthService) {}

  ngOnInit() {
    this.auth.user$.subscribe((user) => {
      console.log('User Data:', user); 
      this.user = user;
    });
  }

  publicarMensaje() {
    if (this.mensaje.trim()) {
      if (this.contienePalabraProhibida(this.mensaje)) {
        console.log('Mensaje bloqueado: Contiene una palabra prohibida');
      } else {
        console.log('Mensaje publicado:', this.mensaje);
        this.mensajes.unshift(this.mensaje); 
        this.mensaje = '';
      }
    } else {
      console.log('Error: El mensaje no puede estar vacío');
    }
  }

  contienePalabraProhibida(mensaje: string): boolean {
    return this.palabrasProhibidas.some((palabra) =>
      mensaje.toLowerCase().includes(palabra.toLowerCase())
    );
  }
  getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }
}
