const pro=require('prompt-sync')();
let text1 =pro('Enter le text global: ');
let text2 =pro('Enter la parie cherchée : ');
if(text1.includes(text2)) console.log(`${text2} included in ${text1}`);
else console.log(`${text2} not included in ${text1}`);