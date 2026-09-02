const p = require('prompt-sync')();
let n = Number(p("Enter un nobmre: ")); 
/*var i=0;
while(n != 0){
    let r = n%10;
    if(Math.floor(n/10) == 0) i+=r;
    else i=(i+r)*10;
    n=Math.floor(n/10);
}*/
while(n != 0){
    let r = n%10
    process.stdout.write(`${r}`);
    n=Math.floor(n/10);
}