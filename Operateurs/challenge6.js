const pro=require('prompt-sync')();
let x=Number(pro("Enter le 1er nombre: "));
if(x>= 10 && x<=100) console.log(`${x} appartient à [10,100]`);
else console.log(`${x} n'appartient pas à [10,100]`);