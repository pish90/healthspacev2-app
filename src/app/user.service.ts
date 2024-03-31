import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpRequest } from './models/signuprequest.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  username: string = '';
  password: string = '';

  public login(username:string,password:string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    let loginRequest = {username, password};
    return this.http.post("http://localhost:8081/v2/api/auth/login", loginRequest, httpOptions);
  }

  public signup(signUpRequest?:SignUpRequest) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    return this.http.post("http://localhost:8081/v2/api/auth/register", signUpRequest, httpOptions);
  }

  // findById(id: number): Observable<User>{
  //   return this.http.get(this.apiUrl + id)
  //   .map((res:Response) => res.json())
  //   .catch((error:any) => Observable.throw(error.json().error || 'Error'));
  // }
}
