import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninRedirectCallbackComponent } from './signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './signout-redirect-callback.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninRedirectCallbackComponent,
    SignoutRedirectCallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
