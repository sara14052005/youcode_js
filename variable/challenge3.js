const p = require('prompt-sync')();
let km = Number(p('La distance en Km :')),
   yards = km * 1093.61;
console.log(`${km} Km = ${yards} Yards`); 