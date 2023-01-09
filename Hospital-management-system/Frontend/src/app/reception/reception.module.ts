import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionRoutingModule } from './reception-routing.module';
import { ReceptionComponent } from './reception.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';


@NgModule({
  declarations: [
    ReceptionComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ReceptionRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ReceptionModule { }
