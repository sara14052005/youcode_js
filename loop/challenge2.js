var p = require('prompt-sync')();
let n = Number(p("Enter un nobmre: "));
var f = 1;
process.stdout.write(`!${n} =`);               
for(let i=n;i>0;i--){
    f*=i;
    if(i>1){process.stdout.write(` ${i} x`);}
    else{ if(i == 1) process.stdout.write(` ${i} = ${f}`);}
    
}
