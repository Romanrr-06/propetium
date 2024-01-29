import { Component } from '@angular/core';

@Component({
  selector: 'app-crypto-game',
  templateUrl: './crypto-game.page.html',
  styleUrls: ['./crypto-game.page.scss'],
})
export class CryptoGamePage {
  currentPrice: number;
  userGuess: 'up' | 'down' | undefined;
  result: string | undefined;
  points = 0;
  pointsInBank = 0;
  minPointsToTransfer = 50; // Cantidad mínima de puntos para transferir al banco

  constructor() {
    this.currentPrice = this.getRandomPrice();
  }

  getRandomPrice(): number {
    return Math.floor(Math.random() * (10000 - 5000) + 5000);
  }

  makeGuess() {
    if (this.userGuess !== undefined) {
      const newPrice = this.getRandomPrice();
      const isCorrect = (this.userGuess === 'up' && newPrice > this.currentPrice) ||
                        (this.userGuess === 'down' && newPrice < this.currentPrice);

      if (isCorrect) {
        this.points += 10;
        this.result = `¡Correcto! Ganaste 10 puntos.`;

        // Verificar si se alcanzó la cantidad mínima para transferir al banco
        if (this.points >= this.minPointsToTransfer) {
          this.transferPointsToBank();
        }
      } else {
        this.result = `Incorrecto. No ganaste puntos.`;
      }

      this.currentPrice = newPrice;
    }
  }

  transferPointsToBank() {
    this.pointsInBank += this.points;
    this.points = 0;
    console.log(`Se transfirieron ${this.pointsInBank} puntos al banco.`);
  }
}
