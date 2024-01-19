import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {
  items!: any[]; 
  searchTerm: string = '';

  constructor() { }

  ngOnInit() {
    
    this.items = [
      { name: 'crypto' },
      { name: 'Elemento 2' },
    
    ];
  }

  searchItems() {
    
    this.items = this.items.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
