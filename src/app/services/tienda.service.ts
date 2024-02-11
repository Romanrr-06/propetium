// tienda.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private puntosEnTienda: number = 0;

  constructor() { }

  getPuntosEnTienda(): number {
    return this.puntosEnTienda;
  }

  transferirPuntosAlCarrito(puntos: number): void {
    this.puntosEnTienda += puntos;
    console.log(`Se transfirieron ${puntos} puntos a la tienda.`);
  }
}
