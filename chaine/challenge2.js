function taille(x){
    let c=0;
    let i=0;
    while(x[i] != undefined){//or text[i] != null
    c++;
    i++;
    }
    return c;
}
const pro=require('prompt-sync')();
let text =pro('Enter un text: ');
console.log(`${taille(text)}`);