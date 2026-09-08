let prime = 1;
const p = require('prompt-sync')();
let age = Number(p("age de Conducteur : "));

console.log("1.sportive\n2.utilitaire\n3.familiale")
let voiture=Number(p(`choisez type de voiture: `));
let nb_acci = p("Nombre d'accident: ");

if(age <25) prime=prime*1.5;
else{
    if(age >= 25 && age <=65) prime=prime;
    else prime*1.2;
}



switch (voiture) {
    case 1:prime=prime*2
        break;
    case 2:prime=prime*1.2
        break;
    case 3:prime=prime*1.1
        break;
    default:console.log("choix invalide");
        break;
}


if(nb_acci>1) prime=prime+1.3;

console.log(prime)  