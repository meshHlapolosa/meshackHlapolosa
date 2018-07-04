import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This will work as Mesh system!';
  // this initiates an array of employee name and roles
  employees = [
    
  ];

  // the model allows the table to display what inputed on the form
  model:any={};
  model2:any={};
  msg:any="";
  // this creates a method that will allow users to add new employees.
  addNewEmployee(){
    this.employees.push(this.model);
    // this resets the model
    this.model = {};
    this.model2 = {};
    this.msg = "A new employee has been added..." 
  }

  // this creates a method that will allow users to delete employees.
  deleteEmployee(i){
    this.employees.splice(i,1);
    this.msg = "An employee has been removed"
  }

  // this creates a method that will allow users to edit employees.
  myvalue;
  editEmployee(k){
    this.model2.name = this.employees[k].name;
    this.model2.empRole = this.employees[k].empRole;
    this.myvalue = k;
  }

  // this creates a method that will allow users to update employees.
  updateEmployee(){
    let k = this.myvalue;
    for(let i=0; i<this.employees.length; i++){
      if(i==k){
          this.employees[i] = this.model2;
          this.model2 = {};
          this.msg = "An employee has been updated"
      }
    }
  }

  clickMe(){
    this.msg = "";
  }
}
