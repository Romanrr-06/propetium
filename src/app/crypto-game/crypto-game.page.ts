// crypto-game.page.ts

import { Component } from '@angular/core';
import { CryptoGameService } from '../services/crypto-game.service';
import { TiendaService } from '../services/tienda.service';

@Component({
  selector: 'app-crypto-game',
  templateUrl: './crypto-game.page.html',
  styleUrls: ['./crypto-game.page.scss'],
})
export class CryptoGamePage {
  public userGuess: 'up' | 'down' | undefined;
  public result: string | undefined;
  public points: number = 0;
  public puntosEnTienda: number = 0;

  constructor(
    private cryptoGameService: CryptoGameService,
    private tiendaService: TiendaService
  ) {}

  getCurrentPrice(): number {
    return this.cryptoGameService.getCurrentPrice();
  }

  makeGuess() {
    if (this.userGuess !== undefined) {
      this.result = this.cryptoGameService.makeGuess(this.userGuess);
      this.points = this.cryptoGameService.getPoints();
      this.puntosEnTienda = this.tiendaService.getPuntosEnTienda();
    }
  }

  transferPoints() {
    const pointsToTransfer = 10;

    if (this.points >= pointsToTransfer) {
      this.points -= pointsToTransfer;
      this.cryptoGameService.transferPointsToStore();
      console.log(`Se transfirieron ${pointsToTransfer} puntos.`);

      this.puntosEnTienda = this.tiendaService.getPuntosEnTienda();
    } else {
      console.log('No tienes suficientes puntos para transferir.');
    }
  }
}
