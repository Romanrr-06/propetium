// chat.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://localhost:3000/mensaje'; // Ajusta la URL según tu configuración

  constructor(private http: HttpClient) { }

  getChatMessages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/chat/messages`);
  }
}
