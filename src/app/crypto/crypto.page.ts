import { ChangeDetectorRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

interface CryptoData {
  labels: string[];
  datasets: ChartDataset<'line', number[]>[]; // Cambiado a un tipo de conjunto de datos simple
}

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.page.html',
  styleUrls: ['./crypto.page.scss'],
})
export class CryptoPage implements OnInit {
  public chartData: CryptoData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Precio' },
    ],
  };

  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        grid: {
          color: 'rgba(255,255,255,0.2)',
        },
        ticks: {
          color: '#fff',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#fff',
        },
      },
    },
  };

  public chartColors: any[] = [
    {
      borderColor: 'rgba(141, 198, 63, 1)',
      backgroundColor: 'rgba(141, 198, 63, 0.2)',
    },
  ];

  public chartType: ChartType = 'line';

  public balance: number = 1000;
  public cryptoAmount: number = 0;
  public currentCryptoPrice: number = 0; // Initialize with a default value
  // private cdr: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateChartDataPeriodically();
  }

  private updateChartDataPeriodically() {
    console.log('Updating chart data...');
    setInterval(() => {
      this.getCurrentCryptoPrice();
      this.updateChartData();
    }, 1000);
  }
  

  private updateChartData() {
    this.chartData.labels.push(this.generateRandomLabel());
    this.chartData.labels.shift();
    const newData = this.generateRandomData();
    this.chartData.datasets[0].data.splice(0, this.chartData.datasets[0].data.length, ...newData);
  
    this.cdr.detectChanges();
  }

  
  private generateRandomData(): number[] {
    const randomValue = Math.floor(Math.random() * 100);
    return [...this.chartData.datasets[0].data.slice(1), randomValue];
  }

  private generateRandomLabel(): string {
    const monthIndex = this.chartData.labels.length % 12;
    return this.getMonthName(monthIndex);
  }

  private getMonthName(index: number): string {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[index];
  }

  private getCurrentCryptoPrice() {
    this.currentCryptoPrice = Math.floor(Math.random() * 1000);
  }

  public buyCrypto() {
    const amountToBuy = 1;
    const cost = amountToBuy * this.currentCryptoPrice;

    if (cost <= this.balance) {
      this.balance -= cost;
      this.cryptoAmount += amountToBuy;
    }
  }

  public sellCrypto() {
    const amountToSell = 1;

    if (amountToSell <= this.cryptoAmount) {
      this.balance += amountToSell * this.currentCryptoPrice;
      this.cryptoAmount -= amountToSell;
    }
  }
}
