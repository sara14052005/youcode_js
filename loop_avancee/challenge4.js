const p = require('prompt-sync')();
let n = p("Enter un nobmre: ");                           
while(n != 0){
    let r = n%10
    process.stdout.write(`${r}`);
    n=Math.floor(n/10);
}