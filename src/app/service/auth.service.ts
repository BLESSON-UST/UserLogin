import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Auth } from '../model/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl : string='';
  signUpUrl : string='';

  constructor(private http : HttpClient){
    this.loginUrl="http://localhost:8080/auth/login";
    this.signUpUrl="http://localhost:8080/auth/register";
  }

 
  login (auth:Auth):Observable<any>{
    return this.http.post<any>(this.loginUrl,auth);
   }
   signup (auth:Auth): Observable<any>{
    return this.http.post<any>(this.signUpUrl,auth);
   }
}
