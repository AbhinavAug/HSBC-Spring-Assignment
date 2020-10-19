import { Component, OnInit } from '@angular/core';
import { MyloginService } from '../mylogin.service';
import { NgForm } from '@angular/forms';
import { timeStamp } from 'console';
import { Userlogin } from '../MyUser';
@Component({
  selector: 'app-test-user',
  templateUrl: './test-user.component.html',
  styleUrls: ['./test-user.component.css']
})
export class TestUserComponent implements OnInit {
  user:Userlogin;
  myuser:Userlogin;
  checkvalid:boolean;
  constructor(log:MyloginService){
    this.myuser=log.getUsers();
  }
  onsubmit(ngform:NgForm){
    this.user=ngform.value;
    if(this.myuser.uname==this.user.uname && this.myuser.password==this.user.password){
      this.checkvalid=true;
    }
    else{
      this.checkvalid=false;
    }
  }
  ngOnInit() {
  }

}
