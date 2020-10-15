function avgMinMax(arr:number[]){
    var sum:number=0;
    var min:number =1000000;
    var max:number =-1000000;
    for(var i of arr)
    {
      sum+=i;
      min=Math.min(min,i);
      max=Math.max(max,i);
    }
    console.log(sum/arr.length);
    console.log(max);
    console.log(min);
}
var arr:number[]=[6,4,7];
avgMinMax(arr);


