import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrl: './patient-home.component.css'
})
export class PatientHomeComponent implements OnInit {

  patients: any;
  constructor(private service:PatientService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
