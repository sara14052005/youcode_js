const p = require('prompt-sync')();
let n = Number(p("Enter un nobmre: ")); 
var i=0;
while(n != 0){
    i++;
    n=Math.floor(n/10);
}
console.log(`Nombre de chiffres = ${i}.`)