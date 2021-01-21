import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FragmentsService {

  constructor(private http: HttpClient) { }

  getAllPoints() {
    return this.http.get(`${environment.apiUrl}/points`)
  }
}
