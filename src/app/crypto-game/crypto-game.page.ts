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
  points!: number;

  constructor(private cryptoGameService: CryptoGameService) {}

  getCurrentPrice(): number {
    return this.cryptoGameService.getCurrentPrice();
  }

  makeGuess() {
    if (this.userGuess !== undefined) {
      this.result = this.cryptoGameService.makeGuess(this.userGuess);
    }
  }
  getPoints(): number {
    return this.points;
  }
}
