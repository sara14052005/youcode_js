function afficher(x){
    for(let i=x;i>=0;i--){
        console.log(`${i}`);
    }
}

var p = require('prompt-sync')();
let a = Number(p("Enter A: "));
afficher(a);