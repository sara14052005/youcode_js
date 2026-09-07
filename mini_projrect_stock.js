console.log("################## Gestion de Stock ##################\n")
var p = require('prompt-sync')();
var livres=[];
var i=0;
function ajouter(){
    console.log("\n================Ajouter un Livre==============")
    livres[i]=livre={
            titre:p("Le titre: "),
            auteur:p("L'auteur: "),
            prix:Number(p("Le prix: ")),
            quantite:Number(p("La quantité: ")),
        };
    i++;
}
function afficher(){
    console.log("\n============Les Livres Disponibles============");
    let j=1;
    for(let x of livres){
        console.log(`   ---Livre ${j}---`)
        for(let y in x){
            console.log(`   ${y}: ${x[y]}`);
        }
        j++;
    }
}
function mettreAjour(){
    console.log("\n=====Mettre à Jour la Quantité d'un Livre=====")
    let t=p("Entrer le titre de livre que vous devez modifier sa quantité: ");
    for(let x of livres){
        if(x.titre === t && x) x.quantite=p("Entrer la nouvelle quantité: ");
        else console.log("Le livre est untouvable.");
    }
}
function supprimer(){
    console.log("\n==============Supprimer un Livre==============")
    let t=p("Entrer le titre de livre que vous devez supprimer: "),
    r=[],k=r.length;
    for(let x of livres){
        if(x.titre !== t){
            r[k] = x;
        }
        k++;
    }
    livres=r;
    i=livres.length
}
do{
    console.log("\n===============Liste des choix================")
    console.log(`    1. Ajouter un Livre au Stock.
    2. Afficher Tous les Livres Disponibles.
    3. Mettre à Jour la Quantité d'un Livre.
    4. Supprimer un Livre du Stock.
    5. Afficher le Nombre Total de Livres en Stock.
    0. Quiter.
    `);

    var choix=Number(p("choisir un nombre s'il vous plait: "));
    switch(choix){
        case 0:
        break;
        case 1:ajouter();
        break;
        case 2:afficher();
        break;
        case 3:mettreAjour();
        break;
        case 4:supprimer();
        break;
        case 5: console.log(`${i} Livres en Stock `)
        break;
        default:console.log(`\nchoix invalide!!!!!!!!!!!!!!`);
        break;
    }
}while(choix != 0)