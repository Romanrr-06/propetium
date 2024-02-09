// ruleta.page.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.page.html',
  styleUrls: ['./ruleta.page.scss'],
})
export class RuletaPage implements OnInit {
public data :any;
constructor(private http: HttpClient){}
  
  ngOnInit() {
       
    this.http.get('http://localhost:3000/crypto').subscribe((data)=> {
      console.log(data)
      this.data = data;
    })
    

  }}