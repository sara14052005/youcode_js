const p = require('prompt-sync')();
let n = Number(p('La Moyenne:'));
switch(true){
    case (n < 10):
        console.log('Recalé');
        break;
    case (n >=10 && n < 12):
        console.log('Passable');
        break;
    case (n >= 12 && n < 14):
        console.log('Assez Bien');
        break;
    case (n >= 14 && n < 16):
        console.log('Bien');
        break;
    case (n >=16 && n <=20):
        console.log('Trés Bien');
        break;
    default:
        console.log('n\'est pas une Moyenne?!!')
}