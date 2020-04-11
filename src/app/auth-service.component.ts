import { Injectable } from '@angular/core';
import { UserManager, User } from 'oidc-client';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private _userManager: UserManager;
    private _user: User;
    private _loginChangedSubject = new Subject<boolean>();

    loginChanged = this._loginChangedSubject.asObservable();
    constructor() {
        const stsSettings = {
            authority: 'http://localhost:8080/auth/realms/myrealm',
            client_id: 'pkce-client',
            redirect_uri: 'http://localhost:4200/signin-callback',
            scope: 'openid profile',
            response_type: 'code',
            post_logout_redirect_uri: 'http://localhost:4200/signout-callback'
        };
        this._userManager = new UserManager(stsSettings);
    }

    login() {
        return this._userManager.signinRedirect();
    }

    isLoggedIn(): Promise<boolean> {
        return this._userManager.getUser().then(user => {
            console.log('User : ' + user);
            const userCurrent = !!user && !user.expired;
            console.log('Current User : ' + userCurrent);
            if (this._user !== user) {
                this._loginChangedSubject.next(userCurrent);
            }
            this._user = user;
            return userCurrent;
        });
    }

    completeLogin() {
        return this._userManager.signinRedirectCallback().then(user => {
            console.log('complete login user : ' + user);
            this._user = user;
            this._loginChangedSubject.next(!!user && !user.expired);
            return user;
        });
    }

    logout() {
        this._userManager.signoutRedirect();
    }

    completeLogout() {
        this._user = null;
        return this._userManager.signoutRedirectCallback();
    }
}