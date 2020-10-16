import { Component, OnInit } from '@angular/core';
import { Model } from "./model";
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  model=new Model();
  person;
  constructor() { 
    this.person=this.model.person;
  }

  ngOnInit() {
  }

}
