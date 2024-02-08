import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SignUpRequest } from '../models/signuprequest.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrl: './patient-login.component.css'
})
export class PatientLoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  signUpRequest = new SignUpRequest;
  message: any;

  constructor(private service:UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(username:string, password:string) {
    let resp = this.service.login(username, password);
    resp.subscribe(data => (
      this.message = data,
      this.router.navigate(["/home"]),
      console.log(data)
    ));
    console.log('Username:', this.username);
    console.log('Password:', this.password);    
  }

  signup() {
    let resp = this.service.signup(this.signUpRequest);
    resp.subscribe(data => (
      console.log(data)
    ));
  }

}
