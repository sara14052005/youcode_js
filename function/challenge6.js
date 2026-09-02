function Fibonacci(x){
    if(x == 1) return 1;
    else{
        if(x == 0) return 0;
        else return(Fibonacci(x-1) + Fibonacci(x-2));
    } 
}

var p = require('prompt-sync')();
let a = Number(p("Enter A: "));
console.log(`F${a} = ${Fibonacci(a)}`);