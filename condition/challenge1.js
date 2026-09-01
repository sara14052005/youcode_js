const p = require('prompt-sync')();
let n = Number(p('Le nombre:'));
if((n%2) == 0){
    console.log(`pair`); 
}else{
    console.log(`impair`); 
}