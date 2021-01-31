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

  async getAllFragments() { 
    return await this.http.get(`${environment.apiUrl}/fragments`).toPromise();
  }

  addFragment(fragmentData: any) {
    return this.http.post(`${environment.apiUrl}/fragments/add`, fragmentData);
  }

  async getFragment(id: number) { 
    return await this.http.get(`${environment.apiUrl}/fragments/${id}`).toPromise();
  }

  editFragment(fragmentData: any, id: number) {
    return this.http.post(`${environment.apiUrl}/fragments/edit/${id}`, fragmentData);
  }

  getFragmentsForArea(areaId: number) {
    return this.http.get(`${environment.apiUrl}/fragments/area/${areaId}`).toPromise();
  }

  getPointsForArea(areaId: number) {
    return this.http.get(`${environment.apiUrl}/points/area/${areaId}`).toPromise();
  }

  getPoint(id: number) {
    return this.http.get(`${environment.apiUrl}/points/${id}`).toPromise();
  }
}
