import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  close = false;
  ngOnInit(): void {
    setTimeout(()=>{

      this.close = true;
    },3000)
  }


  showLogin(){

    this.close=!this.close;
  }

}
