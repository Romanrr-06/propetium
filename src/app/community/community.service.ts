// // community.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class CommunityService {
//   private apiUrl = 'http://localhost:3000'; // Ajusta la URL según la configuración de tu servidor

//   constructor(private http: HttpClient) {}

//   public guardarConversacion(user_id: string, conversation: string): Observable<any> {
//     const payload = { user_id, conversation };
//     return this.http.post(`${this.apiUrl}/guardar-conversacion`, payload);
//   }
// }
