import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  public featureItems: { title: string; icon: string; route: string }[] = [
    { title: 'Community', icon: 'people',route: '/community',  },
    { title: 'Crypto',  icon: 'bookmarks-sharp', route: '/crypto', },
    { title: 'Crypto-game', icon: 'logo-game-controller-a', route: '/crypto-game', },
    { title: 'Inventory', icon: 'server',  route: '/inventory'},
    { title: 'Login',  icon: 'shield-checkmark', route: '/login', },
    { title: 'Noticias y Actualizaciones', icon: 'shield-checkmark', route: '/noticias-actualizaciones',  },
    { title: 'Quizz', icon: 'help-circle-sharp', route: '/quizz',  },
    { title: 'Ruleta',icon:'', route: '/ruleta', },
    { title: 'Abouth', icon:'people-sharp', route: '/sobre', },
    { title: 'Tienda',  icon: 'bag-add-sharp', route: '/tienda' } ,
  ];
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
  }

