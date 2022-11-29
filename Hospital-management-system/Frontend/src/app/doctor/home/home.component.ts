import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  collection: any[] = [1,2];

  close:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  showAddTreat(){

    this.close=!this.close;
  }

}
