import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppointmentsComponent } from './appointments/appointments.component';
import { DoctorComponent } from './doctor.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  { path: '', 
  component: DoctorComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'appointments',component:AppointmentsComponent},
  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
