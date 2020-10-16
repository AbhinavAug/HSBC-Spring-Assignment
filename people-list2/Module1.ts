export class People{
  name:string;
  age:number;
  gender:string;
  constructor(name,age,gender){
   this.name=name;
   this.age=age;
   this.gender=gender;
  }
 }
 export class Module{
  items:People[]=[new People("Ria",22,"female"),
  new People("Dia",22,"female"),
  new People("abhi",23,"male")]
  

  }

