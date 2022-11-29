import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  p: number = 1;
  collection: any[] = [1,2];
  constructor() { }

  ngOnInit(): void {
  }

}
