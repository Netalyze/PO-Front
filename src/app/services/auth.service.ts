import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public get isLoggedIn() {
    return localStorage.getItem('currentUser') != null;
  }

  register(email: string, login: string, password: string,) {
    return this.http.post(`${environment.apiUrl}/register`, { email, login, password });
  }

  login(login: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/login`, { login, password })
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
