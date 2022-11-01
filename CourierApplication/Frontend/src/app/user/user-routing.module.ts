import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcelComponent } from './parcel/parcel.component';

const routes: Routes =[
{path:'parcel',component:ParcelComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
