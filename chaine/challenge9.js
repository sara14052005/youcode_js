function taille(x){
    let c=0;
    let i=0;
    while(x[i] != undefined){//or text[i] != null
    c++;
    i++;
    }
    return c;
}
function noespace(x){
    for(i=0;i<taille(x);i++) {
        if(x[i] == " ") {
            if(x[i+1]!=undefined) process.stdout.write(x[i+1]);
            else process.stdout.write("");
        }
        else process.stdout.write(x[i]);
    }
}
const pro=require('prompt-sync')();
let text =pro('Enter un text: ');
noespace(text);