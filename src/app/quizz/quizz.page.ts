
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.page.html',
  styleUrls: ['./quizz.page.scss'],
})
export class QuizzPage implements OnInit {
 public preguntas: any[] = []; 

  constructor() { }

  ngOnInit() {
    
  }

  }
