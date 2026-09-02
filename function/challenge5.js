function fact(x){
    let f=1
    for(let i=x;i>=1;i--){
        f*=i;
    }
    return f;
}

var p = require('prompt-sync')();
let a = Number(p("Enter A: "));
console.log(`!${a} = ${fact(a)}`);