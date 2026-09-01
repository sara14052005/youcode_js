const p = require('prompt-sync')();
let n = p('L\'annee:');
let ch = p(`choisir le format que vous devez convert la...
1.Mois;
2.Jours;
3.Heures;
4.Minutes;
5.Secondes;
`);
switch(ch){
    case 1 : n=n*12;
        console.log(`${}`)
}