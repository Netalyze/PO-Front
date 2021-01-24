import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuVisible = false;
  userLogged = false;
  role = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.userLogged = this.auth.isLoggedIn;
    this.role = this.auth.role; 
  }

  itemSelected(): void {
    this.menuVisible = !this.menuVisible;
  }

  logoutUser() {
    this.userLogged = false;
    this.auth.logout();
  }
}
