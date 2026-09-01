const p = require('prompt-sync')();
let n = p('La lettre:');
if(n.charCodeAt()>=65 && n.charCodeAt()<=90) console.log(`${n} est Majuscule`);
else console.log(`${n} n\'est pas une lettre ou bien c\'est une lettre miniscule`);
