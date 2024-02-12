import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {
  public data: any[] = [];
  public preguntaActual: any;
  public respuestaActual: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarPreguntas();
  }

  cargarPreguntas() {
    this.http.get('http://localhost:3000/preguntas').subscribe(
      (data: any) => { 
        this.data = data;
        this.mostrarSiguientePregunta();
      },
      (error) => {
        console.error('Error al cargar las preguntas:', error);
      }
    );
  }

  mostrarSiguientePregunta() {
    if (this.data && this.data.length > 0) {
      this.preguntaActual = this.data.shift();
      this.respuestaActual = "";
    } else {
      this.preguntaActual = null;
    }
  }

  siguientePregunta() {
    console.log('Respuesta de la pregunta actual:', this.respuestaActual);

   
    const preguntaId = this.preguntaActual.id;
    this.http.get(`http://localhost:3000/preguntas/${preguntaId}?respuesta=${this.respuestaActual}`)
      .subscribe(
        (response: any) => {
          console.log('Respuesta guardada en el servidor:', response);
          this.mostrarSiguientePregunta();
        },
        (error) => {
          console.error('Error al guardar la respuesta:', error);
        }
      );
  }
}
