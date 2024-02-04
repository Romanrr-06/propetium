import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { IonSearchbar, ToastController } from '@ionic/angular';
// import { SpeechRecognition } from 'cordova-plugin-speechrecognition/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'login', url: '/login', icon: 'log-in', login_hide: false },
    { title: 'about', url: '/about', icon: 'people', login_hide: true },
    { title: 'Home', url: '/home', icon: 'home', login_hide: true },
    { title: 'crypto', url: '/crypto', icon: 'logo-bitcoin', login_hide: true },
    { title: 'game', url: '/crypto-game', icon: 'logo-game-controller-b', login_hide: true },
  ];

  filteredItems: any[] = []; // Define la propiedad filteredItems

  @ViewChild('searchBar', { static: false }) searchBar?: IonSearchbar;

  constructor(
    public auth: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {}

  handleSearch(event: any) {
    const searchTerm = event.detail.value.toLowerCase();

    if (searchTerm.trim() === '') {
      this.clearSearch();
      return;
    }

    // Solo realiza la búsqueda cuando se presiona Enter (código de tecla 13)
    if (event.key === 'Enter') {
      const foundPages = this.appPages.filter(page =>
        page.title.toLowerCase().includes(searchTerm)
      );

      if (foundPages.length > 0) {
        if (foundPages.length === 1) {
          this.navigateToPage(foundPages[0]);
        } else {
          this.presentSuggestions(foundPages);
        }
      } else {
        this.presentToast('No se encontraron coincidencias');
      }
    }
  }

  navigateToPage(page: any) {
    this.router.navigate([page.url]);
    this.clearSearch();
  }

  presentSuggestions(suggestions: any[]) {
    const suggestionTitles = suggestions.map(page => page.title).join(', ');

    this.presentToast(`Se encontraron varias coincidencias: ${suggestionTitles}`);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }

  clearSearch() {
    this.searchBar?.value && (this.searchBar.value = ''); // Limpiar la barra de búsqueda si tiene un valor
    this.searchBar?.setFocus(); // Desenfocar la barra de búsqueda
  }
}
