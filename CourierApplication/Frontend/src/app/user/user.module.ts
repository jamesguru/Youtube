import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ParcelComponent } from './parcel/parcel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps'
import { FilterPipe } from '../pipes/filter.pipe';


@NgModule({
  declarations: [
    
  
    ParcelComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    FormsModule,
    GoogleMapsModule,
    
  ]
})
export class UserModule { }
