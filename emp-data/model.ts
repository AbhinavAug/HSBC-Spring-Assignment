export class People{
  empNo:number;
  ename:string;
  salary:number;
  desg:string;
 
  constructor(empNo,ename,salary,desg){
  this.empNo=empNo;
  this.ename=ename;
  this.salary=salary;
  this.desg=desg;
  
  }
 }
 export class Employee{
  items:People[]=[new People(101,"abhinav",30000,"manager"),
  new People(102,"abhi",50000,"salesman"),
  new People(103,"avi",60000,"VP")]
  

  }
