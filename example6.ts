export class Products{
    items:Product[]=[new Product("chair","plastic"),
    new Product("table","iron"),
    new Product("handle","rubber")]
    printAllProd(){
        for(var p of this.items)
        {
            console.log(p);
        }
    }
}
export class Product{
 name:string;
 type:string;
 constructor(name,type){
  this.name=name;
  this.type=type;
 }
}

let obj=new Products();
obj.printAllProd();
