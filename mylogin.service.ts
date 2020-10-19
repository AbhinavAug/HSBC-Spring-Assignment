import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyloginService {
  getUsers(){
    return this.myuser;
  }
  constructor() {}
    myuser={uname:"abhinav",password:"pass"};
   
}
