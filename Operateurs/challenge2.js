const pro=require('prompt-sync')();
let x=Number(pro("Enter le 1er nombre: "));
let y=Number(pro("Enter le 2éme nombre: "));
let temp;

console.log(`=== Avant échange ===`);
console.log(`x = ${x}`);
console.log(`y = ${y}`);

temp=x;
x=y;
y=temp;

console.log(`=== Aprés échange ===`);
console.log(`x = ${x}`);
console.log(`y = ${y}`);