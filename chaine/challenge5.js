function taille(x){
    let c=0;
    let i=0;
    while(x[i] != undefined){//or text[i] != null
    c++;
    i++;
    }
    return c;
}
function reverse(x){
    for(let i=taille(x)-1;i>=0;i--){
        process.stdout.write(`${x[i]}`); 
    }
}
const pro=require('prompt-sync')();
let text =pro('Enter un text: ');
reverse(text);