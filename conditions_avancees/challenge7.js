const pro=require('prompt-sync')();
let revenu = Number(pro("Entrer Revenu annuel :"))
let impot;
console.log("\n1.célibataire\n2.marié\n3.chef de famille")
let   statut= Number(pro(`choisez Statut fiscal: `));

if(revenu<=20000) impot=revenu*0.05;
else{
    if(revenu>20000 && revenu<=50000) impot=revenu*0.1;
    else impot=revenu*0.2;
}
switch(statut){
    case 1:impot-=1000;
        break;
    case 2:impot-=2000;
        break;
    case 3:impot-=3000;
        break;
    default : console.log("choix de statut invalide!!!!!! ")
}

console.log(impot)