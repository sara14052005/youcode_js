const p = require('prompt-sync')();
let n = Number(p("Enter un nobmre: ")); 
var i=0,f=0,f0=0,f1=1;
while(i<n){
    if(i != 1 && i != 0){
        f=f0+f1;
        f0=f1;
        f1=f;
        console.log(`F(${i}) = ${f}`)
    }else{
        if(i == 1) {f=1; console.log(`F(${i}) = ${f}`);}
        else{f=0; console.log(`F(${i}) = ${f}`);} 
    }
    i++;
}
