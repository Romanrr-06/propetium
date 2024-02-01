// home.page.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public pageTitle: string = 'Bienvenido a la Página de Inicio';

  // Define menu items with their respective routerLinks and icons
  public menuItems = [
    { label: 'Banck', link: '/banck', icon: 'logo-bitcoin' },
    { label: 'Catalogue', link: '/catalogo', icon: 'bag-add-sharp' },
    { label: 'Community', link: '/community', icon: 'people' },
    { label: 'Crypto', link: '/crypto', icon: 'bookmarks-sharp' },
    { label: 'Crypto-game', link: '/crypto-game', icon: 'logo-game-controller-a' },
    { label: 'Inventory', link: '/inventory', icon: 'server' },
    { label: 'Login', link: '/login', icon: 'shield-checkmark' },
    { label: 'Noticias y Actualizaciones', link: '/noticias-actualizaciones', icon: 'shield-checkmark' },
    { label: 'Quizz', link: '/quizz', icon: 'help-circle-sharp' },
    { label: 'Ruleta', link: '/ruleta', icon:'help-circle-sharp'},
    { label: 'Abouth', link: '/sobre', icon:'people-sharp'},
    { label: 'Tienda', link: '/tienda', icon:'bag-add-sharp'},
    
  ]}
