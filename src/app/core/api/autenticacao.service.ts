import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse, LoginPayLoad, RegisterPayLoad, User } from '../model/common.model';
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
          if (response.token) {
            localStorage.setItem(LocalStorage.token, response.token);
          }
          this.loggedInSubject.next(true);
          return response;
      })
    );
  }

  logout() {
    localStorage.removeItem(LocalStorage.token);
    this.loggedInSubject.next(false);
    this.router.navigate(['landing']);
  }
}
