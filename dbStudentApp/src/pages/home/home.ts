import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyDatabaseProvider} from '../../providers/my-database/my-database' ;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private database : MyDatabaseProvider) {
    
  }
  createUser(){
      this.database.CreateUser(0,"Hello","DbApp").then( (data) => {
        console.log(data);
      },(error) => {
        console.log(error);
      })
    }

getAllUser(){
  this.database.GetAllUsers().then((data) => {
    console.log(data);
  }, (error) => {
    console.log(error);
  })
}
}
