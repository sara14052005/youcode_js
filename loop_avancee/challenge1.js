const p = require('prompt-sync')();
let n = p("Enter un nobmre: ");                           
for(let i=10;i>=1;i--){
    console.log(`${n} x ${i} = ${n*i}`);
}
