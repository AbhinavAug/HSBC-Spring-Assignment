import { Component, OnInit } from '@angular/core';
import { Module } from './Module1';
@Component({
  selector: 'app-people-list2',
  templateUrl: './people-list2.component.html',
  styleUrls: ['./people-list2.component.css']
})
export class PeopleList2Component implements OnInit {
  module = new Module();
  getAllPeople(){
        return this.module.items;
      }
  constructor() { }
  ngOnInit() {
  }

}
