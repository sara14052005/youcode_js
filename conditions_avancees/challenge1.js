const p = require('prompt-sync')();
let r = p("Entrer Le Revenu annuel (en euros): "),
    s = p("Entrer Le Score de crédit (sur 1000): "),
    d = p("Entrer La Durée du prêt (en années) : ");

if(r>= 30000 && s>=700 && d<=10){console.log(`Éligible`);
}else{
    if(r>= 30000 && s>= 650 && d<= 15){console.log(`Éligible avec conditions`);
    }else{
        if(r<30000 ||s<650 || d>15) console.log(`Non éligible`);
    }
}