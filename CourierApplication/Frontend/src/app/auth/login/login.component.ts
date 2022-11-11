import { Component, OnInit, ViewChild,OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  @ViewChild('form') form!:NgForm;

  sub!:Subscription;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit(){
    
    this.sub=this.authService.signIn(this.form.value).subscribe((value) =>{

      if(value.user){

        localStorage.setItem('user',JSON.stringify(value.user))
        localStorage.setItem('token',value.token)

        console.log(value.token)

        if(value.user.role === 'admin'){

          this.router.navigate(['/admin'])

        }else{

          this.router.navigate(['/user/parcel'])

        }
      }
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
