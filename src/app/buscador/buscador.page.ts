import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {
public users: any;
public searchedUser: any;
  // public data = [
  //   'Amsterdam',
  //   'Buenos Aires',
  //   'Cairo',
  //   'Geneva',
  //   'Hong Kong',
  //   'Istanbul',
  //   'London',
  //   'Madrid',
  //   'New York',
  //   'Panama City',
  // ];
  // public results = [...this.data];

  // searchCustomer(event: { target: { value: any; }; }){
  //   const text = event.target.value;
  //   this.searchedUser= this.users;
  //   if(text && text.trim() !=''){
  //     this.searchedUser =this.searchedUser.filter((users: any)=>{
  //       return(users.name.toLowercase().indexOf(text.toLowercase()) > -1);
  //     })
  //   }

  public data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  public results = [...this.data];

  handleInput(event) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }

  constructor() { }

  ngOnInit() {
    
    
  }

 
  
}
