// chat.component.ts

import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public chatMessages: any[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.loadChatMessages();
  }

  loadChatMessages() {
    this.chatService.getChatMessages().subscribe(
      (messages: any[]) => { // Agrega el tipo de datos para 'messages'
        this.chatMessages = messages;
      },
      (error: any) => { // Agrega el tipo de datos para 'error'
        console.error('Error al cargar los mensajes:', error);
      }
    );
  }
}
