import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit,OnDestroy {
  constructor(private authService: AuthService) {}
  form!: FormGroup;
  sub!:Subscription;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    this.sub = this.authService.singUp({
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
    }).subscribe((value) =>{

      console.log(value)
    });

    this.form.reset();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
