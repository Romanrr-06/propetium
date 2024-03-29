// app.component.ts
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { IonSearchbar, ToastController } from '@ionic/angular';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'login', url: '/login', icon: 'log-in', login_hide: false },
    { title: 'about', url: '/sobre', icon: 'people', login_hide: true },
    { title: 'Home', url: '/home', icon: 'home', login_hide: true },
    { title: 'crypto', url: '/crypto', icon: 'logo-bitcoin', login_hide: true },
    { title: 'game', url: '/crypto-game', icon: 'game-controller-sharp', login_hide: true },
    { title: 'ruleta', url: '/ruleta', icon: '', login_hide: true },
    { title: 'actualizaciones', url: '/actualizaciones', icon: '', login_hide: true },
    { title: 'catalogo', url: '/catalogo', icon: '', login_hide: true },
    { title: 'noticias', url: '/noticias', icon: 'alert-sharp', login_hide: true },
    { title: 'communidad', url: '/community', icon: '', login_hide: true },
    { title: 'noticias-actualizaciones', url: '/noticias-actualizaciones', icon: '', login_hide: true },
    { title: 'tienda', url: '/tienda', icon: '', login_hide: false },


  ];
  
  public filteredAppPages = this.appPages.filter(page => {
    return (!page.login_hide && this.auth.isAuthenticated$) || page.title.toLowerCase() === 'game' || page.title.toLowerCase() === 'banck' || page.title.toLowerCase() === 'noticias';
  });

  @ViewChild('searchBar', { static: true }) searchBar?: IonSearchbar;

  searchHistory: string[] = [];
  relatedOptions: string[] = [];

  constructor(
    public auth: AuthService,
    private router: Router,
    private toastController: ToastController,
    private searchService: SearchService
  ) {}

  handleSearch(event: any) {
    const searchTerm = event.detail.value.toLowerCase();

    if (searchTerm.trim() === '') {
      this.clearSearch();
      return;
    }

    // Obtener opciones relacionadas del servicio
    this.relatedOptions = this.searchService.getRelatedOptions(searchTerm);

    // Buscar la página relacionada en el arreglo filtrado
    const foundPage = this.filteredAppPages.find(page => page.title.toLowerCase() === searchTerm);

    if (foundPage) {
      this.navigateToPage(foundPage);
      this.addToSearchHistory(searchTerm);
    } else {
      this.presentToast('No se encontraron coincidencias');
    }
  }

  navigateToPage(page: any) {
    this.router.navigate([page.url]);
    this.clearSearch();
  }

  addToSearchHistory(term: string) {
    if (!this.searchHistory.includes(term)) {
      this.searchHistory.push(term);
    }
  }

  clearSearch() {
    // Limpiar el cuadro de búsqueda y restablecer el enfoque
    this.searchBar?.value && (this.searchBar.value = ''); 
    this.searchBar?.setFocus(); 
    // Limpiar las opciones relacionadas
    this.relatedOptions = [];
  }

  clearHistory() {
    this.searchHistory = [];
  }

  handleRelatedOptionClick(option: string) {
    // Manejar el clic en una opción relacionada
    const foundPage = this.appPages.find(page => page.title.toLowerCase() === option.toLowerCase());

    if (foundPage) {
      this.navigateToPage(foundPage);
      this.addToSearchHistory(option);
    } else {
      this.presentToast('No se encontró la página correspondiente a la opción seleccionada.');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      position: 'bottom',
    });
    toast.present();
  }
}
