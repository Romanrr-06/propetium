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
      } else {
        this.result = `Incorrecto. No ganaste puntos.`;
      }

      this.currentPrice = newPrice;
    }
  }
}
