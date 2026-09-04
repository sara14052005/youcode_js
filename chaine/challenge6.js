function taille(x){
    let c=0;
    let i=0;
    while(x[i] != undefined){//or text[i] != null
    c++;
    i++;
    }
    return c;
}
function compte(x,y){
    let c=0;
    for(i=0;i<taille(x);i++) {
        if(x[i] === y) c++;
    }
    return c;
}
const pro=require('prompt-sync')();
let text =pro('Enter un text: ');
let car =pro('Enter le caractère que vous devez chercher: ');
console.log(`"${car}" caractère apparaît ${compte(text,car)} fois `)