import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientHomeComponent } from './patient-home/patient-home.component';

const routes: Routes = [
  {path:"", redirectTo:"login",pathMatch:"full"},
  {path:"login", component:PatientLoginComponent},
  {path:"home", component:PatientHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
