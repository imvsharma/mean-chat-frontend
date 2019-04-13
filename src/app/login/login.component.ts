import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: "",
    password: ""
  }
  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit (){
    this.auth.login(this.user).subscribe(data => {
      console.log('data', data);
      if(data.success === true) {
        console.log('data', data);
        sessionStorage.setItem('user', JSON.stringify(data.user));
        this.auth.isAuthenticated = true;
        this.router.navigate(['/chatroom']);
      }
    })
  }

}
