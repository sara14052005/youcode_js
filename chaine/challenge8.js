function taille(x){
    let c=0;
    let i=0;
    while(x[i] != undefined){//or text[i] != null
    c++;
    i++;
    }
    return c;
}
function upper(x){
    for(let i=0;i<taille(x);i++){
        switch(x[i]){
            case "A":  process.stdout.write("a"); 
            break;
            case "B": process.stdout.write("b");
            break;
            case "C": process.stdout.write("c");
            break;
            case "D": process.stdout.write("d");
            break;
            case "E": process.stdout.write("e");
            break;
            case "F": process.stdout.write("f");
            break;
            case "G": process.stdout.write("g");
            break;
            case "H": process.stdout.write("h");
            break;
            case "I": process.stdout.write("i");
            break;
            case "J": process.stdout.write("j");
            break;
            case "K": process.stdout.write("k");
            break;
            case "L": process.stdout.write("l");
            break;
            case "M": process.stdout.write("m");
            break;
            case "N": process.stdout.write("n");
            break;
            case "O": process.stdout.write("o");
            break;
            case "P": process.stdout.write("p");
            break;
            case "Q": process.stdout.write("q");
            break;
            case "R": process.stdout.write("r");
            break;
            case "S": process.stdout.write("s");
            break;
            case "T": process.stdout.write("t");
            break;
            case "U": process.stdout.write("u");
            break;
            case "V": process.stdout.write("v");
            break;
            case "W": process.stdout.write("w");
            break;
            case "X": process.stdout.write("x");
            break;
            case "Y": process.stdout.write("y");
            break;
            case "Z": process.stdout.write("z");
            break;
            default : process.stdout.write(`${x[i]}`); 
        }
    }
}
const pro=require('prompt-sync')();
var text =pro('Enter un text: ');
upper(text);