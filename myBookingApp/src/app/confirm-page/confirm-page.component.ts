import { Component, OnInit } from '@angular/core';
import loginDetails from '../myArraysFile.component';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.css']
})
export class ConfirmPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  store = [];
  name = loginDetails[0];
  intNoRooms = loginDetails[2];
  strUserLocation = loginDetails[3];
  dteStartDate = loginDetails[4];
  dteEndDate = loginDetails[5];
ok(){
this.store.push(loginDetails);
}
  
}
