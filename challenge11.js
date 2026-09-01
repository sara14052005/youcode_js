const p = require('prompt-sync')();
let l = Number(p('La Longueur :')),
    L = Number(p('La Largeur :'));
   s = l*L;
console.log(`Surface = ${s.toFixed(4)}`); 