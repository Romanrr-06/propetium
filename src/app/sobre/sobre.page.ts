import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {
 public user: any

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe((data) =>{
      this.user =data
    
      console.log(this.user)
    });
  }

}
