import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }


  addAppointment(
    patient_name:string,
    doctor_email:string,
    date:string,
    patient_email:string

    
    ):Observable<{message:string}>{


      return this.http.post<{message:string}>("http://localhost:8000/api/appointments",
      {

        patient_name,
        doctor_email,
        date,
        patient_email
      })
  }
}
