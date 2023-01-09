import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/interfaces/Patient';
import { PatientService } from 'src/app/services/patient.service';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { DiagnosisService } from 'src/app/services/diagnosis.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  collection: any[] = [1,2];
  patient_email!:string;
  patients$!:Observable<Patient[]>;
  close:boolean=false;
  constructor(private patientService:PatientService,private diagnosiService: DiagnosisService) { }
  form!:FormGroup;
  ngOnInit(): void {

    this.getAllpatients();

    this.form = new FormGroup({

      name_treatment: new FormControl(null,[Validators.required]),
      drug_administered: new FormControl(null,[Validators.required]),
      doctor_name: new FormControl(null,[Validators.required]),
      bill: new FormControl(null,[Validators.required]),
      date: new FormControl(null,[Validators.required]),
      description: new FormControl(null,[Validators.required]),
      patient_status: new FormControl(null,[Validators.required]),
    })
  }

  showAddTreat(email:string){

    this.patient_email=email;
    console.log(this.patient_email)
    this.close=!this.close;
  }

  closeAddTreat(){
    this.close=!this.close;
  }


  getAllpatients(){


    this.patients$=this.patientService.getAllPatients();
  }

  onSubmit(){

    console.log(this.form.value);

    this.diagnosiService.addTreatment(


      this.form.value.name_treatment,
      this.form.value.drug_administered,
      this.form.value.doctor_name,
      this.patient_email,
      this.form.value.bill,
      this.form.value.date,
      this.form.value.description,
      this.form.value.patient_status,
    ).subscribe(value => {
      if(value){

        console.log(value)
      }
    })
  
  }

}
