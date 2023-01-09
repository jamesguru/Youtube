import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  p: number = 1;
  collection: any[] = [1,2];
  constructor(private appointmentService:AppointmentService) { }

  email= "janedoe@gmail.com"

  ngOnInit(): void {
  }


}
