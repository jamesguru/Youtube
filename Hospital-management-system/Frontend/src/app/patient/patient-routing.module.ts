import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient.component';

const routes: Routes = [
  
  { path: '', component: PatientComponent,
  children:[
  
    {path: '', component:HomeComponent},
    {path:'appointment', component:AppointmentComponent}
  ]
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
