import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeComponent } from './home/home.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    DoctorComponent,
    TopbarComponent,
    HomeComponent,
    AppointmentsComponent,
    
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule
  ]
})
export class DoctorModule { }
