const p = require('prompt-sync')();
console.log(`---Point X---`);
let x1 = Number(p('x1:')),
    x2 = Number(p('x2:'));
console.log(`---Point Y---`);
let y1 = Number(p('y1:')),
    y2 = Number(p('y2:'));
console.log(`---Point Z---`);
let z1 = Number(p('z1:')),
    z2 = Number(p('z2:'));
    
let d = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)+Math.pow((z2-z1),2))
console.log(`Distance = ${d} `); 