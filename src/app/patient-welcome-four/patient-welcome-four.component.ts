import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-welcome-four',
  templateUrl: './patient-welcome-four.component.html',
  styleUrl: './patient-welcome-four.component.css'
})
export class PatientWelcomeFourComponent {

  progress: number = 50;

  constructor(private router: Router) { }

  previous() {
    this.router.navigate(["/patientNextOfKinDetails"]);
  }

  submit() {
    this.router.navigate(["/patientMedicalAidDetails"]);
  }

  skip() {
    this.router.navigate(["/patientMedicalAidDetails"]);
  }

}
