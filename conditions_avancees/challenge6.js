const pro=require('prompt-sync')();
let consommation=Number(pro("Entrer Consommation d'électricité : "));
let tarif;

console.log("\n1.résidentiel\n2.commercial")
let   utilisateur= Number(pro(`choisez Type d'utilisateur: `));

console.log("\n0.standard\n1.réduit")
let   contrat= Number(pro(`choisez Type de contrat : `));
if(utilisateur == 1 ){
    if(contrat == 0) tarif=consommation*0.2
    else tarif=consommation*0.15
}
if(utilisateur == 2 ){
    if(contrat == 0) tarif=consommation*0.3
    else tarif=consommation*0.25
}
if(consommation>500) tarif+=1.1

console.log(tarif)