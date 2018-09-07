import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the AddStudentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-students',
  templateUrl: 'add-students.html',
})
export class AddStudentsPage {


  student = {
    name: '',
    lstName: '',
    email: '',
    course: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private databaseProvider: DatabaseProvider, private viewCtrl: ViewController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad AddStudentsPage');
  // }

  createStudent() {
    this.databaseProvider.addStudents(this.student.name).then((data) => {
      this.viewCtrl.dismiss({ reload: true });
    })
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
