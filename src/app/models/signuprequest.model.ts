import { last } from "rxjs";

export class SignUpRequest {
    username?:string;
    firstName?:string;
    lastName?:string;
    email?:string;
    mobileNumber?:string;
    password?:string;
    isEnabled?:boolean;
    role?:[];

    constructor(username: string, firstname: string, lastname: string, email: string, mobileNumber: string, password: string) {
        // this.userType = userType;
        this.username = username;
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.password = password;
      }
}