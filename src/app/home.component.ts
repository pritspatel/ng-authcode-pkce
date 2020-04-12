import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService} from './auth-service.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn = false;

  constructor(private _authService  :AuthService, public http: HttpClient){
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

  getProducts() {
    this.http.get('http://localhost:8081/product')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}
