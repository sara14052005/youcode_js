const p = require('prompt-sync')();
let n = p('La lettre:');
if(n.charCodeAt()>=65 && n.charCodeAt()<=90){
    console.log(`${n} est Majuscule`);
}else{
    if(n.charCodeAt()>=97 && n.charCodeAt()<=122){console.log(`${n} est Miniscule`);}
    else{console.log(`${n} n\'est pas une lettre`);} 
}