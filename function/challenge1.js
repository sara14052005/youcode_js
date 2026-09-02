function somme(x,y){
    return x+y;
}

var p = require('prompt-sync')();
let a = Number(p("Enter A: "));
let b= Number(p("Enter b: "));
console.log(`${a} + ${b} = ${somme(a,b)}`);