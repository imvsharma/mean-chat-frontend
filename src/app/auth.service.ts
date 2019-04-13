import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated:boolean = false;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  login (data: any): Observable<any>{
    return this.http.post('http://localhost:4000/api/login',data,this.httpOptions);
  }

  isLogedIn () {
    if(sessionStorage.getItem('user')) {
      this.isAuthenticated = true
    } else {
      this.isAuthenticated = false;
    }
  }
}
