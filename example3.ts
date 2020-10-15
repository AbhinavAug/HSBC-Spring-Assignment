function arraySquare(a1:number[]):number[]{
var a2:number[]=new Array(a1.length);
for(var i=0;i<a1.length;i++){
    a2[i]=a1[i]*a1[i];
}
return a2;
}
var arr:number[]=[10,20,30];
var squareArray=arraySquare(arr);
console.log(squareArray);
