const p = require('prompt-sync')();
let r = Number(p('Le rayon :')),
   v = (4/3) * Math.PI * Math.pow(r,3);
console.log(`Volume = ${v.toFixed(4)}`); 
