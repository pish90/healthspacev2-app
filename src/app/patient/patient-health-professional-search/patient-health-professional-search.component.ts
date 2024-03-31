import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-health-professional-search',
  templateUrl: './patient-health-professional-search.component.html',
  styleUrl: './patient-health-professional-search.component.css'
})
export class PatientHealthProfessionalSearchComponent {
  opened = false;
  search() {
    // Implement search logic here
    console.log('Searching...');
  }
}