import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {
  orderId:string="";
  custName:string="";
  billingDate:string="";
  shippingDate:string="";
  orderTotal:string="";
  displayData(id,name,billdate,shipdate,total){
    console.log("order id "+id);
    console.log("cust Name "+name);
    console.log("Billing Date "+billdate);
    console.log("Shipping Date "+shipdate);
    console.log("Order total "+total);
  }
  constructor() { }

  ngOnInit() {
  }

}
