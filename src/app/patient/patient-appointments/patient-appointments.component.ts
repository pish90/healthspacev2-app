import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { HealthProfessional } from '../../models/health-professional';
import { AppointmentService } from '../../appointment/appointment-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrl: './patient-appointments.component.css'
})

export class PatientAppointmentsComponent implements OnInit {

  hpList: any;
  selectedValue: any;
  selectedPractitionerId: any;
  healthProfessional: HealthProfessional;
  selectedPractitioner: any;
  practitioners: HealthProfessional[] = [];
  practitioner: any;
  selectedDate:any;
  availableSlots: string[] = [];
  selectedSlot: string = "";
  startTime: string = "";
  endTime: string = "";
  isAvailable: any = false;

  ChangePractitioner(e:any) {
    this.selectedValue = e.target.value;
    console.log(e.target.value);
  }

  constructor(private service:SharedService, private appointmentService:AppointmentService, private datepipe:DatePipe) {
    this.healthProfessional = new HealthProfessional();
  }

  ngOnInit(): void {
    this.selectedDate = this.datepipe.transform(new Date(), "yyyy-mm-dd");
    this.service.getHpList()
      .subscribe((data:any) =>{
        this.hpList = data;
        this.selectedPractitioner = data.id;
        console.log("data" + data.id);
      });
  }

  checkAvailability(hpId: number, date: Date, startTime: string, endTime: string) {
    if (hpId && date && startTime && endTime) {
      this.appointmentService.checkSlotAvailability(hpId, this.selectedDate, startTime, endTime)
        .subscribe(available => this.isAvailable = available);
    }
    console.log ("i am checking availability in the component");
    console.log(hpId);
  }

  bookAppointment() {
    // Call your backend service to book the appointment
    // Example: this.appointmentService.bookAppointment(this.selectedPractitioner, this.selectedDate, this.selectedSlot).subscribe(() => alert('Appointment booked successfully'));
    alert('Appointment booked successfully');
  }

  // onPractitionerSelected(hp: HealthProfessional) {
  //   this.healthProfessional = hp;
  // }

}
