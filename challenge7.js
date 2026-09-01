const p = require('prompt-sync')();
console.log(`---Données importantes--- 
    1er nombre : pondération 2
    2ème nombre : pondération 3
    3ème nombre : pondération 5
--- Calculer la moyenne pondérée---`);
let a = Number(p('1er nombre :')),
    b = Number(p('2eme nombre :')),
    c = Number(p('3eme nombre :'));
   
console.log(`la moyenne pondérée = ${(a*2+b*3+c*5)/(2+3+5)}`); 