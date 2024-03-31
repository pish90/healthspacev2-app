import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientLoginComponent } from './patient/patient-login/patient-login.component';
import { PatientRegisterComponent } from './patient/patient-register/patient-register.component';
import { RegistrationCompleteComponent } from './registration-complete/registration-complete.component';
import { PatientWelcomeOneComponent } from './patient-welcome-one/patient-welcome-one.component';
import { PatientWelcomeTwoComponent } from './patient-welcome-two/patient-welcome-two.component';
import { PatientWelcomeThreeComponent } from './patient-welcome-three/patient-welcome-three.component';
import { PatientWelcomeFourComponent } from './patient-welcome-four/patient-welcome-four.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { PatientHealthProfessionalSearchComponent } from './patient/patient-health-professional-search/patient-health-professional-search.component';
import { PatientLabResultsComponent } from './patient/patient-lab-results/patient-lab-results.component';
import { PatientLettersComponent } from './patient/patient-letters/patient-letters.component';
import { PatientMedicalHistoryComponent } from './patient/patient-medical-history/patient-medical-history.component';
import { PatientScriptsRefillsComponent } from './patient/patient-scripts-refills/patient-scripts-refills.component';
import { PatientAppointmentsComponent } from './patient/patient-appointments/patient-appointments.component';
import { PatientHealthProfessionalListComponent } from './patient/patient-health-professional-list/patient-health-professional-list.component';
import { PatientHealthProfessionalNotesComponent } from './patient/patient-health-professional-notes/patient-health-professional-notes.component';

const routes: Routes = [
  {path:"", redirectTo:"login",pathMatch:"full"},
  {path:"login", component:PatientLoginComponent},
  {path:"home", component:PatientWelcomeOneComponent},
  {path:"verifyOtp", component:VerifyOtpComponent},
  // Patient routes
  {path:"registerPatient", component:PatientRegisterComponent},
  {path:"registrationComplete", component:RegistrationCompleteComponent},
  {path:"patientAppointments", component:PatientAppointmentsComponent},
  {path:"patientPersonalDetails", component:PatientWelcomeOneComponent},
  {path:"patientHealthProfessionalList", component:PatientHealthProfessionalListComponent},
  {path:"patientHealthProfessionalNotes", component:PatientHealthProfessionalNotesComponent},
  {path:"patientHealthProfessionalSearch", component:PatientHealthProfessionalSearchComponent},
  {path:"patientLabResults", component:PatientLabResultsComponent},
  {path:"patientLetters", component:PatientLettersComponent},
  {path:"patientMedicalHistory", component:PatientMedicalHistoryComponent},
  {path:"patientScriptsRefills", component:PatientScriptsRefillsComponent},
  {path:"patientContactDetails", component:PatientWelcomeTwoComponent},
  {path:"patientNextOfKinDetails", component:PatientWelcomeThreeComponent},
  {path:"patientMedicalAidDetails", component:PatientWelcomeFourComponent}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
