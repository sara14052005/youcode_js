function isequal(x,y){
    if(x === y) return true;
    else return false;
}
const pro=require('prompt-sync')();
let text1 =pro('Enter un text 1: ');
let text2 =pro('Enter un text 2: ');
if(isequal(text1,text2)) console.log("text 1 et text 2 sont égales ");
else console.log("text 1 et text 2 ne sont pas égales ");