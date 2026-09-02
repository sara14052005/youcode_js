const pro = require('prompt-sync')();
let b = Number(pro("Enter la base: ")); 
let p = Number(pro("Enter la exposant: ")); 
var s =1;  
for(let i=1;i<=p;i++){
    s*=b;
}
console.log(`${b}^${p} = ${s}`);