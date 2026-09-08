const p = require('prompt-sync')();
let budget = Number(p("Entrer Budget  : ")),
    nb_personne = Number(p("Entrer Nombre de personnes : "));

if(budget>=1000) console.log("Voyage haut de gamme");
else{
    if(budget >=500 && budget <1000) console.log("Voyage moyen");
    else console.log("Voyage économique");
} 
if(budget>=1000 && nb_personne>2) console.log("à Plage");
else{
    if(budget>=500 && nb_personne<=2) console.log("à Montagne");
    else console.log("à Ville")
}
