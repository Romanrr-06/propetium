// crypto-game.page.ts

import { Component } from '@angular/core';
import { CryptoGameService } from '../services/crypto-game.service';

@Component({
  selector: 'app-crypto-game',
  templateUrl: './crypto-game.page.html',
  styleUrls: ['./crypto-game.page.scss'],
})
export class CryptoGamePage {
  public userGuess: 'up' | 'down' | undefined;
  public result: string | undefined;
  public points: number = 0;

  constructor(private cryptoGameService: CryptoGameService) {}

  getCurrentPrice(): number {
    return this.cryptoGameService.getCurrentPrice();
  }

  makeGuess() {
    if (this.userGuess !== undefined) {
      this.result = this.cryptoGameService.makeGuess(this.userGuess);
      this.points = this.cryptoGameService.getPoints(); // Actualiza los puntos desde el servicio
    }
  }
  transferPoints() {
    const pointsToTransfer = 10;

    if (this.points >= pointsToTransfer) {
      this.points -= pointsToTransfer;
      this.cryptoGameService.transferPointsToStore(); // Cambia a la función de transferencia de la tienda
      console.log(`Se transfirieron ${pointsToTransfer} puntos.`);
    } else {
      console.log('No tienes suficientes puntos para transferir.');
    }
  }
}
