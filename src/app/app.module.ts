import { NgModule } from '@angular/core';
import {DatePipe} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientLoginComponent } from './patient/patient-login/patient-login.component';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientHomeComponent } from './patient/patient-home/patient-home.component';
import { PatientRegisterComponent } from './patient/patient-register/patient-register.component';
import { RegistrationCompleteComponent } from './registration-complete/registration-complete.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegistrationEmailConfirmationComponent } from './registration-email-confirmation/registration-email-confirmation.component';
import { PatientWelcomeOneComponent } from './patient-welcome-one/patient-welcome-one.component';
import { PatientWelcomeTwoComponent } from './patient-welcome-two/patient-welcome-two.component';
import { PatientWelcomeThreeComponent } from './patient-welcome-three/patient-welcome-three.component';
import { PatientWelcomeFourComponent } from './patient-welcome-four/patient-welcome-four.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { PatientHealthProfessionalSearchComponent } from './patient/patient-health-professional-search/patient-health-professional-search.component';
import { PatientHealthProfessionalListComponent } from './patient/patient-health-professional-list/patient-health-professional-list.component';
import { PatientHealthProfessionalNotesComponent } from './patient/patient-health-professional-notes/patient-health-professional-notes.component';
import { PatientAppointmentsComponent } from './patient/patient-appointments/patient-appointments.component';
import { PatientMedicalHistoryComponent } from './patient/patient-medical-history/patient-medical-history.component';
import { PatientLabResultsComponent } from './patient/patient-lab-results/patient-lab-results.component';
import { PatientScriptsRefillsComponent } from './patient/patient-scripts-refills/patient-scripts-refills.component';
import { PatientLettersComponent } from './patient/patient-letters/patient-letters.component';
import { HealthProfessionalComponent } from './health-professional/health-professional.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientLoginComponent,
    CreatePatientComponent,
    PatientDetailsComponent,
    PatientListComponent,
    PatientHomeComponent,
    PatientRegisterComponent,
    RegistrationCompleteComponent,
    RegistrationEmailConfirmationComponent,
    PatientWelcomeOneComponent,
    PatientWelcomeTwoComponent,
    PatientWelcomeThreeComponent,
    PatientWelcomeFourComponent,
    VerifyOtpComponent,
    PatientHealthProfessionalSearchComponent,
    PatientHealthProfessionalListComponent,
    PatientHealthProfessionalNotesComponent,
    PatientAppointmentsComponent,
    PatientMedicalHistoryComponent,
    PatientLabResultsComponent,
    PatientScriptsRefillsComponent,
    PatientLettersComponent,
    HealthProfessionalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [
    UserService,     
    provideAnimationsAsync(), 
    DatePipe],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
