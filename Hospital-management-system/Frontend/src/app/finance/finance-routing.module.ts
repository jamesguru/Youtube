import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './finance.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '',
   component: FinanceComponent,
  children:[
    {path:'',component:HomeComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
