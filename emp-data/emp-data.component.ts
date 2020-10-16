import { Component, OnInit } from '@angular/core';
import { Employee } from './model'
@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.css']
})
export class EmpDataComponent {
  employee = new Employee();
  mytable:boolean=false;
  mylist:boolean=false;
  
  constructor() { }
  clearData(){
    this.mylist=false;
    this.mytable=false;
  }

  getTable(){
    this.mytable=true;
    this.mylist=false;
    return this.employee.items;
  }

  getList(){
    this.mylist=true;
    this.mytable=false;
    return this.employee.items;
  }

 

}
  


