const p = require('prompt-sync')();
let n = Number(p("Enter un nobmre: ")); 
var s =2;  
for(let i=1;i<=n;i++){
    console.log(`${s}`);
    s+=2;
}
