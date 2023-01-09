import { Component, OnInit } from '@angular/core';
import { faAd, faUser } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { PatientService } from '../services/patient.service';
import { Observable } from 'rxjs';
import { Patient } from '../interfaces/Patient';
@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {

  constructor(private patientService:PatientService) { }
  p: number = 1;

  faUser = faUser;
  faAd = faAd;
  close: boolean = false;
  form!: FormGroup;
  patients$!:Observable<Patient[]>;
  searchText:string=""

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      resident_area: new FormControl(null, [Validators.required]),
      admission_no: new FormControl(null, [Validators.required]),
      id_no: new FormControl(null, [Validators.required]),
      room_admitted: new FormControl(null, [Validators.required]),


    })

    this.getAllPatients();
  }


  showAdd() {

    this.close = !this.close;
  }


  onSubmit(){

    console.log(this.form.value)

    this.patientService.addPatient(

      this.form.value.name,
      this.form.value.resident_area,
      this.form.value.room_admitted,
      this.form.value.admission_no,
      this.form.value.id_no,
      this.form.value.email,
     
      
     
      
    ).subscribe(val => {

      console.log(val)

      if(val){

        this.form.reset();
      }

    })
  }
getAllPatients(){

  this.patients$=this.patientService.getAllPatients();
}

}
