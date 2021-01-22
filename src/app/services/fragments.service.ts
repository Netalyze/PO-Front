import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FragmentsService {

  constructor(private http: HttpClient) { }

  async getAllPoints() {
      return await this.http.get(`${environment.apiUrl}/points`).toPromise();
  }

  async getAllAreas() { 
    return await this.http.get(`${environment.apiUrl}/areas`).toPromise();
  }

  addFragment(fragmentData: any) {
    return this.http.post(`${environment.apiUrl}/fragments/add`, fragmentData);
  }
}
