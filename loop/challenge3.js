const p = require('prompt-sync')();
let n = Number(p("Enter un nobmre: ")); 
var s =0;  
for(let i=1;i<=Math.floor(n);i++){
    s+=i;
    if(i<Math.floor(n)){process.stdout.write(` ${i} +`);}
    else{ if(i == Math.floor(n)) process.stdout.write(` ${i} = ${s}`);}
}
