import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterUser } from '../../interfaces/user'

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private authService: AuthService, private appointmentService: AppointmentService) { }
  p: number = 1;
  collection: any[] = [1];
  close: boolean = false;
  doctor_email!: string;
  doctors$!: Observable<RegisterUser[]>;
  date!: string;

  ngOnInit(): void {

    this.getDoctors()
  }




  getDoctors() {

    this.doctors$ = this.authService.getDoctors();
  }

  showBook(email: string) {


    this.doctor_email = email;

    this.close = !this.close;
  }

  Book() {

    const patient_name = "jane";

    const patient_email = "janedoe@gmail.com";

    console.log(this.date);

    this.appointmentService.addAppointment(patient_name, this.doctor_email, this.date, patient_email).subscribe(val => {


      console.log(val)
    })

    window.location.reload();
  }

  Close() {

    this.close = !this.close;
  }
}
