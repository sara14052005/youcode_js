const p = require('prompt-sync')();
let score = Number(p("Entrer Score : ")),
    anciennete = Number(p("Entrer Ancienneté : "));
    
console.log("\n0.aucune\n1.une\n2. deux ou plus")
let   recomp_recue= Number(p(`choisez Récompenses reçues: `));

if(score>=90 && anciennete>=5) console.log("Excellente");
else{
    if(score >=75 && anciennete >=3) console.log("Bonne");
    else{
        if(score>=50 && anciennete<3) console.log("Satisfaisante");
        else console.log("Insuffisante");
    }
} 

switch(recomp_recue){
    case 0: console.log(`Aucune bonus.`);
    break;
    case 1:console.log(`Bonus de 10%.`);
    break;
    case 2:console.log(`Bonus de 20%.`);
    break;
}
