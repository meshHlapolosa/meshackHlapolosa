import { Component, OnInit } from '@angular/core';
import signUpDetails from '../myArraysFile.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // this is my private property for binding
  userFullName;
  userEmailAddress;
  userPassword;
  userConfirmPassword;
  userLocation;

  constructor() { }

  ngOnInit() {
  }

  myUserSignUpMethod(userFullName, userEmailAddress,userPassword,userConfirmPassword,userLocation){
    userFullName =signUpDetails.push(userFullName);
    userEmailAddress = signUpDetails.push(userEmailAddress);
    userPassword = signUpDetails.push(userPassword);
    userConfirmPassword = signUpDetails.push();
    userLocation = signUpDetails.push(userLocation);
    console.log(signUpDetails);

  }
  strUserEmailAddress = signUpDetails[0];
}
