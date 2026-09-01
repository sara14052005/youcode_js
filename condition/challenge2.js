const p = require('prompt-sync')();
let n = p('La lettre:');
switch(true){
    case (n == 'a' || n =='A'):
        console.log('Voyelle!!!!!!!!!!');
        break;
    case (n == 'o' || n =='O'):
        console.log('Voyelle!!!!!!!!!!');
        break;
    case (n == 'e' || n =='E'):
        console.log('Voyelle!!!!!!!!!!');
        break;
    case (n == 'i' || n =='I'):
        console.log('Voyelle!!!!!!!!!!');
        break;
    case (n == 'u' || n =='U'):
        console.log('Voyelle!!!!!!!!!!');
        break;
    case (n == 'y' || n =='Y'):
        console.log('Voyelle!!!!!!!!!!');
        break;
    default:
        console.log('n\'est pas un voyelle?!!')
}