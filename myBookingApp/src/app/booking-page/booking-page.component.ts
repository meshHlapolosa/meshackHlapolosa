import { Component, OnInit } from '@angular/core';
import loginDetails from '../myArraysFile.component';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {

  constructor() {loginDetails.length=0 }

  ngOnInit() {
  }

  myBookingDetailsMethod(userEmailAddress,userNoRooms,userLocationChoice,userStartDate,userEndDate,price){
    alert("Hello, Your booking has been confirmed ! Please enjoy your stay and visit us again. Should you wish to cancel the reservation please contact the hotel directly.");
    loginDetails[0] = userEmailAddress;
    userNoRooms = loginDetails.push(userNoRooms);
    userLocationChoice = loginDetails.push(userLocationChoice)
    userStartDate = loginDetails.push(userStartDate);
    userEndDate = loginDetails.push(userEndDate);
    price = loginDetails.push(price);
    console.log(loginDetails);
   
   }
 strUserEmailAddress = loginDetails[0];
 }

