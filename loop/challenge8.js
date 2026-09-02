const p = require('prompt-sync')();
let n = Number(p("Enter un nobmre: ")); 
var i=2,f=0,f0=0,f1=1;
while(i<=n){
    if(n != 1 && n != 0){
        f=f0+f1;
        f0=f1;
        f1=f;
    }else{
        if(n == 1) f=1;
        else f=0;
    }
    i++;
}
console.log(`F(${n}) = ${f}`)