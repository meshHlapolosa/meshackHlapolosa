import { Component, OnInit } from '@angular/core';
import loginDetails from "../myArraysFile.component"
import signUpDetails from '../myArraysFile.component'


@Component({
  selector: 'app-my-login-page',
  templateUrl: './my-login-page.component.html',
  styleUrls: ['./my-login-page.component.css']
})
export class MyLoginPageComponent implements OnInit {

  // this is my private property for binding
  userEmailAddress ;
  userPassword;
  loginDetails;

  constructor() { }

  ngOnInit() {  
  }

  myUserloginMethod(userEmailAddress,userPassword){
   
   userEmailAddress = loginDetails.push(userEmailAddress);
   userPassword = loginDetails.push(userPassword);
   console.log(loginDetails);
  
  }
strUserEmailAddress = signUpDetails[0];
}
