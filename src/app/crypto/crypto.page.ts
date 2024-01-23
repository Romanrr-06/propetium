  import { Component, OnInit } from '@angular/core';
  import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

  @Component({
    selector: 'app-crypto',
    templateUrl: './crypto.page.html',
    styleUrls: ['./crypto.page.scss'],
  })

  export class CryptoPage implements OnInit {
    public lineChartData: ChartDataset[] = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Precio' },
    ];
    public lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions: ChartOptions = {
      responsive: true,
    };

    public lineChartColors: any[] = [
      {
        borderColor: 'green',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', 
      },
      {
        borderColor: 'red',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', 
      },
    ];

    public lineChartLegend = true;
    public lineChartType: ChartType = 'line';
    public lineChartPlugins = [];

    constructor() {}

    ngOnInit() {}
  }
