const p = require('prompt-sync')();
let n = Number(p('L\'annee:'));
let ch = Number(p(`choisir le format que vous devez convert la...
1.Mois;
2.Jours;
3.Heures;
4.Minutes;
5.Secondes;
`));
switch(ch){
    case 1 :console.log(`${n} ans = ${n*12} mois`);
    break;
    case 2 :console.log(`${n} ans = ${n*365} jours`);
    break;
    case 3 :console.log(`${n} ans = ${(n*365)*24} heures`);
    break;
    case 4 :console.log(`${n} ans = ${n*365*24*60} minutes`);
    break;
    case 5 :console.log(`${n} ans = ${(n*365)*24*3600} secondes`);
    break;
    default: console.log(`choix invalide`);
}