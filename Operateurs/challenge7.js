const pro=require('prompt-sync')();
let x=Number(pro("Enter le prix: "));
let y=Number(pro("Enter le pourcentage: "));
let m=x*y;

console.log(`Montant de la réduction: ${m} DH`);
console.log(`Prix final: ${x-m} DH`);