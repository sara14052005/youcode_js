const p = require('prompt-sync')();
let n = Number(p("Enter un nobmre: ")); 
var m=n;               
for(let i=1;i<=n;i+=2){
    process.stdout.write(`${" ".repeat(m)}`);    
    console.log(`${("*".repeat(i))}`);
    m--;
}