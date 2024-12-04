import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse, LoginPayLoad, Produto, RecoverPayLoad, RegisterPayLoad, User } from '../model/common.model';
import { ApiEndpoint, LocalStorage } from '../constants/constants';
import { BehaviorSubject, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(this.checkToken());
  loggedIn$ = this.loggedInSubject.asObservable();
  router = inject(Router);

  constructor(private _http: HttpClient) { }

  checkToken(): boolean {
    return !!localStorage.getItem('USER_TOKEN');
  }

  register(payLoad: RegisterPayLoad) {
    return this._http.post<ApiResponse<User>>(
      `${ApiEndpoint.Auth.Register}`,
      payLoad
    );
  }

  login(payLoad: LoginPayLoad) {
    return this._http
      .post<ApiResponse<User>>(`${ApiEndpoint.Auth.Login}`, payLoad)
      .pipe(
        map((response) => {
          if (response.accessToken) {
            localStorage.setItem(LocalStorage.accessToken, response.accessToken);
          }
          this.loggedInSubject.next(true);
          return response;
        })
      );
  }

  recover(payLoad: RecoverPayLoad) {
    return this._http
    .post<ApiResponse<User>>(`${ApiEndpoint.Auth.Recover}`,
      payLoad
    );
  }

  logout() {
    localStorage.removeItem(LocalStorage.accessToken);
    this.loggedInSubject.next(false);
    this.router.navigate(['landing']);
  }
}
