import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banck',
  templateUrl: './banck.page.html',
  styleUrls: ['./banck.page.scss'],
})
export class BanckPage implements OnInit {
  points: number = 0;
  propetiumCoins: number = 0;

  constructor() { }

  ngOnInit() {
   
  }

  redeemPoints() {
    const exchangeRate = 0.1;

    const coinsToRedeem = this.points * exchangeRate;

    this.points = 0;
    this.propetiumCoins += coinsToRedeem;
  }
}
