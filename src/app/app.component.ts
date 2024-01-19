import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'catalogo', url: '/catalogo', icon: 'mail', login_hide: true  },
    { title: 'abouth', url: '/sobre', icon: 'paper-plane', login_hide: true  },
    { title: 'login', url: '/login', icon: 'heart', login_hide: false  },
    { title: 'quizz', url: '/quizz', icon: 'archive' , login_hide: true },
    { title: 'crypto', url: '/crypto', icon: 'trash', login_hide: true  },
    { title: 'Search', url: '/buscador', icon: 'warning', login_hide: true },
    { title: 'game', url: '/cryto-game', icon: 'cloud', login_hide: true }
  ];

  constructor(public auth: AuthService) {}
}
