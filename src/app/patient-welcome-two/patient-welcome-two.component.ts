import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-welcome-two',
  templateUrl: './patient-welcome-two.component.html',
  styleUrl: './patient-welcome-two.component.css'
})
export class PatientWelcomeTwoComponent {

  progress: number = 50;

  constructor(private router: Router) { }

  previous() {
    this.router.navigate(["/patientPersonalDetails"]);
  }

  next() {
    this.router.navigate(["/patientNextOfKinDetails"]);
  }

  skip() {
    this.router.navigate(["/patientNextOfKinDetails"]);
  }

}
