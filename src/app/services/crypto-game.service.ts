// crypto-game.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoGameService {
  private currentPrice: number;
  private points: number;
  private pointsInStore: number;
  private minPointsToTransfer: number;

  constructor() {
    this.currentPrice = this.getRandomPrice();
    this.points = 0;
    this.pointsInStore = 0;
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
        this.transferPointsToStore();
      }
      this.currentPrice = newPrice;
      return `¡Correcto! Ganaste 10 puntos.`;
    } else {
      this.currentPrice = newPrice;
      return `Incorrecto. No ganaste puntos.`;
    }
  }

  transferPointsToStore(): void {
    if (this.points > 0) {
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
