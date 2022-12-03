import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
  p: number = 1;
  collection: any[] = [1,2];
  close=false;
  ngOnInit(): void {
  }


  showDelete(){

    this.close = !this.close;
  }

}
