import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { AppointmentRequest } from '../appointment-request';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  id: number = 0;
  date: Date = new Date;
  startTime: string = '';
  endTime: string = '';

  public saveAppointment(appointment: Appointment) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };

    let save = {appointment};
    return this.http.post("http://localhost:8081/v2/api/appointments/save", save, httpOptions);
  }

  checkSlotAvailability(hpId: number, date: Date, startTime: string, endTime: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    console.log("i am checking slot availability");

    return this.http.get(`http://localhost:8081/v2/api/appointments/available?${hpId}&${date}&${startTime}&${endTime}`, httpOptions);
  }

}
