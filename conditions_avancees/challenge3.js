const p = require('prompt-sync')();
let jA = Number(p("Entrer Nombre de jours de congés accordés: ")),
    jU = Number(p("Entrer Nombre de jours de congés utilisés: "));
    
console.log("\n0.temps partiel\n1.temps plein\n")
let   s = Number(p(`choisez votre statut: `));

if(jA < jU) console.log("Votre Congé est Terminée!!!!!!!")
switch(s){
    case 0: console.log(`il reste ${parseInt(jA/2)-jU}`);
    break;
    case 1:console.log(`il reste ${jA-jU}`);
    break;
}
