const pro = require('prompt-sync')();
let b = Number(pro("Enter la base: ")); 
let p = Number(pro("Enter la exposant: ")); 
var s =1,i=1;
while(i <=p && i >=0){
    s*=b;
    i++;
}
console.log(`${b}^${p} = ${s}`);