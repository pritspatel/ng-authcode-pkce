import { Component, OnInit } from '@angular/core';
import {AuthService} from './auth-service.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn = false;

  constructor(private _authService  :AuthService){
    this._authService.loginChanged.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  ngOnInit(){
    this._authService.isLoggedIn().then( loggedIn => {
      console.log('logged in : ' + loggedIn);
      this.isLoggedIn = loggedIn;
      console.log('isLoggedIn : ' + this.isLoggedIn);
    })
  }

  login(){
    this._authService.login();
  }

  logout(){
    this._authService.logout();
  }

}
