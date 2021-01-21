import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate() {
    if (this.auth.isLoggedIn) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
