import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'login', url: '/login', icon: 'log-in', login_hide: false  },
    { title: 'catalogo', url: '/catalogo', icon: 'bookmarks', login_hide: true  },
    { title: 'abouth', url: '/sobre', icon: 'people',  login_hide: true },
    { title: 'Home', url: '/home', icon: 'home', login_hide: true},
    { title: 'crypto', url: '/crypto', icon:'logo-bitcoin', login_hide: true  },
    { title: 'game', url: '/crypto-game', icon: 'logo-game-controller-b', login_hide: true },
    { title: 'ruleta', url: '/ruleta', icon: 'gift', login_hide: true },
    // { title: 'ruleta', url: '/', icon: 'cloud', login_hide: true },
  ];

  constructor(public auth: AuthService) {}

  
}
