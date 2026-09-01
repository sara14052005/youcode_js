const p = require('prompt-sync')();
let n = Number(p('Le nombre:'));
if(n<0){console.log(`${n} est négatif`);
}else{
    if(n>0) console.log(`${n} est positif`);
    else console.log(`${n} est null`);
}