const p = require('prompt-sync')();
let n = p("Enter un nobmre: ");                           
for(let i=1;i<=10;i++){
    console.log(`${n} x ${i} = ${n*i}`);
}
