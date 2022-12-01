import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    FinanceComponent,
    SidenavComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule
  ]
})
export class FinanceModule { }
