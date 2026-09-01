const p = require('prompt-sync')();
let x1 = Number(p('X1:')),
    x2 = Number(p('X2:')),
    x3 = Number(p('X3:'));
let MG= Math.pow((x1 * x2 * x3),(1/3));
console.log(`Moyenne géométrique = (${x1} * ${x2} * ${x3})^(1/3) = ${MG.toFixed(3)}`); 