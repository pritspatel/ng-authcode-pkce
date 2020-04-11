import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninRedirectCallbackComponent } from './signin-redirect-callback.component';
import { AppComponent } from './app.component';
import { SignoutRedirectCallbackComponent } from './signout-redirect-callback.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'signin-callback', component: SigninRedirectCallbackComponent },
  { path: 'signout-callback', component: SignoutRedirectCallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
