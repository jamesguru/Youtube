import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { RegisterUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private authService: AuthService) { }

  users$!: Observable<RegisterUser[]>;
  p: number = 1;

  id:number | undefined;

  close = false;
  ngOnInit(): void {

    this.getUsers();
  }



  getUsers() {

    this.users$ = this.authService.getUsers();

  }

  assignId(id: number | undefined) {
    this.close = !this.close;
    this.id=id;
    console.log(id)

  }

  showDelete() {



    this.close = !this.close;

    this.authService.deleteUser(this.id).subscribe(val => {

      console.log(val)
    })


    window.location.reload();


  }

  closeDelete() {
    this.close = !this.close;

  }

}
