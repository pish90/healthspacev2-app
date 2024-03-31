import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent {
  otp: string = "";
  enail: string = "";
  verificationResult: string = "Your have successfully been verified";

  constructor(private http: HttpClient) {}

  verifyOtp() {
    this.http.post<any>('http://localhost:8081/v2/api/otp/verify-otp', { otp: this.otp, email: this.enail }).subscribe(
      response => {
        this.verificationResult = response.message;
      },
      error => {
        console.error('Error occurred while verifying OTP:', error);
        this.verificationResult = 'An error occurred while verifying OTP.';
      }
    );
  }
}
