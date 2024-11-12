import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, LoginPayLoad, RegisterPayLoad, User } from '../model/common.model';
import { ApiEndpoint, LocalStorage } from '../constants/constants';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

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
          return response;
      })
    );
  }
}
