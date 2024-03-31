import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-welcome-one',
  templateUrl: './patient-welcome-one.component.html',
  styleUrl: './patient-welcome-one.component.css'
})
export class PatientWelcomeOneComponent {
  showProgress: boolean = false;
  progress: number = 0;
  firstName: string = '';
  lastName: string = '';
  gender: string = '';
  isCitizen: boolean = false;
  idNumber: string = '';
  dob: Date = new Date;
  employer: string = '';
  occupation: string = '';

  constructor(private router: Router) { }

  next() {
    this.progress = Math.min(this.progress + 25, 100);
    this.router.navigate(["/patientContactDetails"]);
  }

}
