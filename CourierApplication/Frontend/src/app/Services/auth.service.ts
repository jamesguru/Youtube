import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, LoginUser, RegisterUser } from 'src/interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  singUp(user:RegisterUser):Observable<{message:string}>{


    return this.http.post<{message:string}>('http://localhost:3000/api/user/signup',user)
  }

  signIn(login:LoginUser):Observable<Login>{


 return this.http.post<Login>('http://localhost:3000/api/user/signin',login)
  }

}
