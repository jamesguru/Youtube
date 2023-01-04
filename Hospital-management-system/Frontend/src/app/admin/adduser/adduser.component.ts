import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {


  form!: FormGroup;
  role!: string;
  name!: string;
  email!: string;
  password!: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {


    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,

      ]),

    });
  }

  selectRole(e: any) {

    this.role = e.target.value;
  }

  onSubmit() {

    this.name = this.form.value.name;
    this.email = this.form.value.email;
    this.password = this.form.value.password;

    this.authService.registerUser
    ({ name: this.name, email: this.email,
       password: this.password, role: this.role }).subscribe(value => {

        console.log(value)
       });

      this.form.reset();

  }


}
