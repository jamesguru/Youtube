import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  
  { 
    path: '', 
    component: AdminComponent, 
    children:[
      {path:'',component:HomeComponent},
      {path:'users',component:UsersComponent},
      {path:'adduser',component:AdduserComponent}
 ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
