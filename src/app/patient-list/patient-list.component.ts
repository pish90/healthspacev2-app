import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements OnInit {

  patients?: Observable<Patient[]>;

  constructor(private patientService: PatientService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    // this.patients = this.patientService.getPatientsList();
  }

}
