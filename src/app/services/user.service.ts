import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  async getAllUsers() { 
    return await this.http.get(`${environment.apiUrl}/users`).toPromise();
  }
}
