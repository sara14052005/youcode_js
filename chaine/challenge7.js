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
            case "a":  process.stdout.write(`A`); 
            break;
            case "b": process.stdout.write("B");

            break;
            case "c": process.stdout.write("C");
            break;
            case "d": process.stdout.write("D");
            break;
            case "e": process.stdout.write("E");
            break;
            case "f": process.stdout.write("F");
            break;
            case "g": process.stdout.write("G");
            break;
            case "h": process.stdout.write("H");
            break;
            case "i": process.stdout.write("I");
            break;
            case "j": process.stdout.write("J");
            break;
            case "k": process.stdout.write("K");
            break;
            case "l": process.stdout.write("L");
            break;
            case "m": process.stdout.write("M");
            break;
            case "n": process.stdout.write("N");
            break;
            case "o": process.stdout.write("O");
            break;
            case "p": process.stdout.write("P");
            break;
            case "q": process.stdout.write("Q");
            break;
            case "r": process.stdout.write("R");
            break;
            case "s": process.stdout.write("S");
            break;
            case "t": process.stdout.write("T");
            break;
            case "u": process.stdout.write("U");
            break;
            case "v": process.stdout.write("V");
            break;
            case "w": process.stdout.write("W");
            break;
            case "x": process.stdout.write("X");
            break;
            case "y": process.stdout.write("Y");
            break;
            case "z": process.stdout.write("Z");
            break;
            default : process.stdout.write(`${x[i]}`); 
        }
    }
    
}
const pro=require('prompt-sync')();
var text =pro('Enter un text: ');
upper(text);