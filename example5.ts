function strJoin(seperator:string, ...arr:string[]){
    arr.sort;
    var res:string="";
    for(var str of arr){
        res=res.concat(str,seperator);
    }
   console.log(res);
}
strJoin("@","abhinav","sri");
