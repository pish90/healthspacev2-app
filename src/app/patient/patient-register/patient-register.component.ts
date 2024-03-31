import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUpRequest } from '../../models/signuprequest.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrl: './patient-register.component.css'
})
export class PatientRegisterComponent  implements OnInit{
  loginType: string = '';
  username: string = '';
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  mobileNumber: string = '';
  password: string = '';
  confirmPassword: string = '';
  terms: boolean = false;

  id?: number;
  patientForm?: FormGroup;
  private sub: any;

  signUpRequest?: SignUpRequest;

  constructor(private route: ActivatedRoute, private service:UserService, private router: Router) { }

  ngOnInit(): void {
  }

  register(username:string, firstname:string, lastname:string, email:string, mobileNumber:string, password:string) {
    this.signUpRequest = new SignUpRequest(username, firstname, lastname, email, mobileNumber, password);
    let resp = this.service.signup(this.signUpRequest);
    resp.subscribe(data => (
      this.router.navigate(["/registrationComplete"]),
      console.log(data)
    ));
  }

}
