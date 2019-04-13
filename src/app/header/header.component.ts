import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  
  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.isAuthenticated = true;
  }

  goToLogin() {
    console.log('login');
    this.router.navigate(["/login"])
  }

  goToRegister() {
    this.router.navigate(['/register'])
  }

  logout() {
    sessionStorage.removeItem('user');
    this.auth.isAuthenticated = false;
    this.router.navigate(['/login'])
  }


  
}
