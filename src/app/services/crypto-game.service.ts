import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoGameService {
  private currentPrice: number;
  private points: number;
  private pointsInBank: number;
  private minPointsToTransfer: number;

  constructor() {
    this.currentPrice = this.getRandomPrice();
    this.points = 0;
    this.pointsInBank = 0;
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
        this.transferPointsToBank();
      }
      this.currentPrice = newPrice;
      return `¡Correcto! Ganaste 10 puntos.`;
    } else {
      this.currentPrice = newPrice;
      return `Incorrecto. No ganaste puntos.`;
    }
  }

  transferPointsToBank(): void {
    this.pointsInBank += this.points;
    this.points = 0;
    console.log(`Se transfirieron ${this.pointsInBank} puntos al banco.`);
  }

  private getRandomPrice(): number {
    return Math.floor(Math.random() * (10000 - 5000) + 5000);
  }
}
