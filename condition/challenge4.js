const p = require('prompt-sync')();
console.log('---saisir les coefficients---')
let a = Number(p('a:'));
let b = Number(p('b:'));
let c = Number(p('c:'));
let delta = Math.pow(b,2)-(4*a*c);
if(delta > 0){
    let x1 = (-b - Math.sqrt(delta))/(2*a);
    let x2 = (-b + Math.sqrt(delta))/(2*a);
    console.log(`Cette equation a 2 solution:${x1} et ${x2}`);
}else{
    if(delta == 0){
        let x0 = -b/(2*a);
        console.log(`Cette equation a 1 solution:${x0}`);

    }else{
        console.log(`cette equation n\'a pas une solution réelle `)
    }
}