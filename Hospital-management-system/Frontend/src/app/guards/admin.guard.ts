import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {


  activate:boolean = false;

  constructor(private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     const  user = JSON.parse(localStorage.getItem('user') as string)
      const token = localStorage.getItem('token') as string;
      if(user.role === 'admin' && token){
        this.router.navigate(['/admin']);

        this.activate=true;
      }
      else if (!user.role && !token){
        this.router.navigate(['/auth/login']);

        this.activate=false;
      }

   return this.activate;
  }
  }
  

