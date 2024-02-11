import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {
  constructor(private http: HttpClient){}
  public data : any;

  ngOnInit() {
       
    this.http.get('http://localhost:3000/preguntas').subscribe((data)=> {
      console.log(data)
      this.data = data;
    })
  }

}
