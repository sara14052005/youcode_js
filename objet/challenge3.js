function aire(x){
    return x.largeur*x.longeur
}
const pro=require('prompt-sync')();

let rectangle ={
    largeur:Number(pro(`Entrer votre largeur: `)),
    longeur:Number(pro(`Entrer votre longeur: `))
}
console.log("L'aire = : "+aire(rectangle));