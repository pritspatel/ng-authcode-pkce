import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninRedirectCallbackComponent } from './signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './signout-redirect-callback.component';
import { HomeComponent } from './home.component';
import {TokenInterceptor} from './token-interceptor.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SigninRedirectCallbackComponent,
    SignoutRedirectCallbackComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
