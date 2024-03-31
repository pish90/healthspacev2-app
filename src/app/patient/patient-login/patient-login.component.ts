import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrl: './patient-login.component.css'
})
export class PatientLoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  passwordFieldType: string = 'password';
  hide = true;

  constructor(private service:UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login(username:string, password:string) {
    let resp = this.service.login(username, password);
    resp.subscribe(data => (
      this.router.navigate(["/home2"]),
      console.log(data)
    ));
    console.log('Username:', this.username);
    console.log('Password:', this.password);    
  }

  registerPatientPage() {
      this.router.navigate(["/registerPatient"])
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }


}
