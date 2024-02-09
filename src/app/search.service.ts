import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  getRelatedOptions(searchTerm: string): string[] {
    const options = ['Home', 'About', 'Crypto', 'Game', 'Ruleta', 'Actualizaciones', 'Catalogo', 'Noticias'];

    return options.filter(option =>
      option.toLowerCase().includes(searchTerm)
    );
  }
}
