const p = require('prompt-sync')();
let v = Number(p('La Vitesse en Km/h :'));
v = v * 0.27778;
console.log(`convert en cours...
    la vitesse en m/s est : ${v.toFixed(4)}`); 