import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/catalogo', icon: 'mail' },
    { title: 'Outbox', url: '/sobre', icon: 'paper-plane' },
    { title: 'Favorites', url: '/login', icon: 'heart' },
    { title: 'Archived', url: '/quizz', icon: 'archive' },
    { title: 'Trash', url: '/crypto', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
