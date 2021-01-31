import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) { }

  async getTripsForUser(userId: string) {
    return await this.http.get(`${environment.apiUrl}/trips/user/${userId}`).toPromise();
  }

  async addTrip(data: any) {
    return await this.http.post(`${environment.apiUrl}/trips/add`, data);
  }

  getAllLeaders() {
    return this.http.get(`${environment.apiUrl}/leaders`).toPromise();
  }
}
