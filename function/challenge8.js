function ispair(x){
    if(x%2 == 0) return true;
    else return false;
}

var p = require('prompt-sync')();
let a = Number(p("Enter A: "));
if(ispair(a) == true) console.log(`${a} est pair.`);
else console.log(`${a} est impair.`);