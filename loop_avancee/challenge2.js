const p = require('prompt-sync')();
let n = p("Enter un nobmre: ");
let m = 1;                           
for(let i=1;i<=n;i++){
    console.log(`${("*".repeat(m))}`);
    m+=2;
}
