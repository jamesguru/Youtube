import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../interfaces/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }


  addPatient(

    name: string,
    resident_area: string,
    room_admitted: string,
    admission_no: string,
    id_no: number,
    email: string
  ): Observable<{ message: string }> {

    return this.http.post<{ message: string }>('http://localhost:8000/api/patients', {

      name,
      resident_area,
      room_admitted,
      admission_no,
      id_no,
      email
    })
  }


  getAllPatients():Observable<Patient[]>{

    return this.http.get<Patient[]>('http://localhost:8000/api/patients')
  }
}
