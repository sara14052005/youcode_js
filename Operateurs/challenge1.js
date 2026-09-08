const pro=require('prompt-sync')();
let x=Number(pro("Enter le 1er nombre: "));
let y=Number(pro("Enter le 2éme nombre: "));

console.log(`${x} + ${y} = ${x+y}`);
console.log(`${x} - ${y} = ${x-y}`);
console.log(`${x} * ${y} = ${x*y}`);
console.log(`${x} / ${y} = ${parseInt(x/y)}`);