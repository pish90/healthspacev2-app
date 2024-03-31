import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-welcome-three',
  templateUrl: './patient-welcome-three.component.html',
  styleUrl: './patient-welcome-three.component.css'
})
export class PatientWelcomeThreeComponent {

  progress: number = 50;

  constructor(private router: Router) { }

  previous() {
    this.router.navigate(["/patientContactDetails"]);
  }

  next() {
    this.router.navigate(["/patientMedicalAidDetails"]);
  }

  skip() {
    this.router.navigate(["/patientMedicalAidDetails"]);
  }

}
