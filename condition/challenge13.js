const p = require('prompt-sync')();
console.log(`----le point A l'extrémité de segment----`);
let xa = Number(p("Entrer xa : ")),
    ya = Number(p("Entrer ya : "));
console.log(`----le point B l'extrémité de segment----`);
let xb = Number(p("Entrer xb : ")),
    yb = Number(p("Entrer yb : "));
console.log(`----le point M de plan----`);
let xm = Number(p("Entrer xm : ")),
    ym = Number(p("Entrer ym : "));

let d = (xm-xa)*(yb-ya)-(ym-ya)*(xb-xa);
(d==0) ? console.log(`Le point M se trouve sur le segment AB.`) : console.log(`Le point M se ne trouve pas sur le segment AB.`);