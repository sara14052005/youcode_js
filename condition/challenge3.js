const p = require('prompt-sync')();
let n1 = parseInt(p('n1:'));
let n2 = parseInt(p('n2:'));
if(n1 === n2 ){
    console.log(`la somme:${n1+n2}
le triple:${3*(n1+n2)}`);
}else{
    console.log(`la somme:${n1+n2}`)
}