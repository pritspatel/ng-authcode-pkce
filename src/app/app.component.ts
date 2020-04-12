import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth-service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'ng-authcode-pkce';
  //isLoggedIn = false;

  constructor(private _authService  :AuthService){
    // this._authService.loginChanged.subscribe(loggedIn => {
    //   this.isLoggedIn = loggedIn;
    // });
  }

  ngOnInit(){
    // this._authService.isLoggedIn().then( loggedIn => {
    //   console.log('logged in : ' + loggedIn);
    //   this.isLoggedIn = loggedIn;
    //   console.log('isLoggedIn : ' + this.isLoggedIn);
    // })
  }

  // login(){
  //   this._authService.login();
  // }
  //
  // logout(){
  //   this._authService.logout();
  // }
}
