function min(x,y){
    if(x<y) return x;
    else return y;
}

var p = require('prompt-sync')();
let a = Number(p("Enter A: "));
let b= Number(p("Enter b: "));
console.log(`le min est: ${min(a,b)}`);