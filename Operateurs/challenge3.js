const pro=require('prompt-sync')();
let x=Number(pro("Enter le 1er nombre: "));
let y=Number(pro("Enter le 2éme nombre: "));

console.log(`=== Avant utilise les opérateurs d'affectation ===`)
console.log(`x = ${x}`);

console.log(`=== Aprés utilise les opérateurs d'affectation ===`)

x+=y;
console.log(`x = ${x}`);

x-=y;
console.log(`x = ${x}`);

x*=y;
console.log(`x = ${x}`);

x/=y;
console.log(`x = ${x}`);