const pro=require('prompt-sync')();
let livre={}
livre["titre"]=pro("Le titre : ");
livre["auteur"]=pro("Le auteur : ");
livre["annee"]=pro("Le année : ");
console.log(`
---Information de livre---
    Titre : ${livre.titre}
    Auteur : ${livre.auteur}
    Année : ${livre.annee}
`);