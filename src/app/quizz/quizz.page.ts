import { Component, OnInit } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {
  public preguntas: any[] = [];

  constructor(private httpBackend: HttpBackend) { }

  ngOnInit() {
    this.getPreguntas();
  }

  getPreguntas() {
    const id: number = 1;

    // Use HttpBackend to create a new instance of HttpClient
    const httpClient = new HttpClient(this.httpBackend);

    // Provide an empty object as the second argument (request body)
    httpClient.post<any[]>(`http://localhost:3000/pregunta/${id}`, {}).subscribe(
      (data: any) => {
        console.log(data)
        // Log the data to the console
        this.preguntas = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
