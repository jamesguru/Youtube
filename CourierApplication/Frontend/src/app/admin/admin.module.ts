import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { SearchPipe } from '../pipes/search.pipe';


@NgModule({
  declarations: [
    AdminComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    GooglePlaceModule,
    FormsModule
   
    
  ]
})
export class AdminModule { }
