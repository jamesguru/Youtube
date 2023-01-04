import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login, LoginUser, RegisterUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  getDoctors():Observable<RegisterUser[]>{

    return this.http.get<RegisterUser[]>('http://localhost:8000/api/users/getdoctors');
  }

  registerUser(user:any):Observable<{message:string}>{

    return this.http.post<{message:string}>('http://localhost:8000/api/users/signup',user)
  }

  getUsers():Observable<RegisterUser[]>{

    return this.http.get<RegisterUser[]>('http://localhost:8000/api/users');
  }

  deleteUser(id:number | undefined):Observable<{message:string}>{

    return this.http.delete<{message:string}>(`http://localhost:8000/api/users/${id}`);
  }

  signIn(login:LoginUser):Observable<Login>{

    return this.http.post<Login>('http://localhost:8000/api/users/signin',login)

  }

}
