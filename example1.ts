var num:number=12345;
var rem:number=0;
var sum:number=0;
for(var i:number=num;i>0;i=i/10){
    rem=i%10;
    sum=sum+rem;
}
console.log(sum); 


