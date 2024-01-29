import { Component } from '@angular/core';

@Component({
  selector: 'app-crypto-game',
  templateUrl: './crypto-game.page.html',
  styleUrls: ['./crypto-game.page.scss'],
})
export class CryptoGamePage {
 public currentPrice: number;
  public userGuess: 'up' | 'down' | undefined;
  public result: string | undefined;
  public points = 0;
  public pointsInBank = 0;
  public minPointsToTransfer = 120; 

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
