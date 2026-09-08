const pro=require('prompt-sync')();
let x=Number(pro("Enter le 1er nombre: "));
let y=Number(pro("Enter le 2éme nombre: "));

if(x>y) console.log(`${x} > ${y}`);
if(x<y) console.log(`${x} < ${y}`);
if(x == y) console.log(`${x} = ${y}`);
