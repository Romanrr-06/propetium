// crypto-game.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoGameService {
  private currentPrice: number;
  private points: number;
  private pointsInStore: number; // Nueva variable para almacenar puntos en la tienda
  private minPointsToTransfer: number;

  constructor() {
    this.currentPrice = this.getRandomPrice();
    this.points = 0;
    this.pointsInStore = 0; // Inicializa la variable de puntos en la tienda
    this.minPointsToTransfer = 120;
  }

  getCurrentPrice(): number {
    return this.currentPrice;
  }

  makeGuess(userGuess: 'up' | 'down'): string {
    const newPrice = this.getRandomPrice();
    const isCorrect = (userGuess === 'up' && newPrice > this.currentPrice) ||
                      (userGuess === 'down' && newPrice < this.currentPrice);

    if (isCorrect) {
      this.points += 10;
      if (this.points >= this.minPointsToTransfer) {
        this.transferPointsToStore(); // Cambia a la función de transferencia de la tienda
      }
      this.currentPrice = newPrice;
      return `¡Correcto! Ganaste 10 puntos.`;
    } else {
      this.currentPrice = newPrice;
      return `Incorrecto. No ganaste puntos.`;
    }
  }

  transferPointsToStore(): void {
    if (this.points > 0) { // Asegura que solo se transfieran puntos si hay puntos para transferir
      this.pointsInStore += this.points;
      this.points = 0;
      console.log(`Se transfirieron ${this.pointsInStore} puntos a la tienda.`);
    }
  }

  private getRandomPrice(): number {
    return Math.floor(Math.random() * (10000 - 5000) + 5000);
  }

  getPoints(): number {
    return this.points;
  }

  getPointsInStore(): number {
    return this.pointsInStore;
  }
}
