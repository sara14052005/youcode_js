const p = require('prompt-sync')();
let a = Number(p('A:')),
   b = Number(p('B:'));

console.log(`${a} + ${b} = ${a+b}`); 
console.log(`${a} - ${b} = ${a-b}`); 
console.log(`${a} * ${b} = ${a*b}`); 
console.log(`${a} / ${b} = ${(a/b).toFixed(2) }`); 