import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor() { }
  p: number = 1;
  collection: any[] = [1];
  close:boolean=false;
  ngOnInit(): void {
  }




  showBook(){

    this.close=!this.close;
  }
}
