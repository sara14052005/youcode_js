const pro=require('prompt-sync')();
let rectangle ={
    largeur:Number(pro(`Entrer votre largeur: `)),
    longeur:Number(pro(`Entrer votre longeur: `)),
    aire: function(){
    return this.largeur*this.longeur
    }
}
console.log("L'aire = : "+rectangle.aire());