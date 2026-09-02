const p = require('prompt-sync')();
let n = Number(p("Enter un nobmre: ")); 
var s =0;  
for(let i=1;i<=n;i++){
    if(n%i == 0){process.stdout.write(` ${i},`);}
    else{ if(i == n) process.stdout.write(` ${i}`);}
}