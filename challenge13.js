const p = require('prompt-sync')();
let n = Number(p('Enter un nomber entier:')),
    b = n.toString(2),
    h = n.toString(16);

console.log(`Binaire = ${b}\nHexadecimal = ${h}`);
