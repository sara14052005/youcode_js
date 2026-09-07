console.log("################## Gestion de Stock ##################\n")
var p = require('prompt-sync')();
var contacts=[];
var i=0;
function ajouter(){
    console.log("\n================ Ajouter un Contact ==============")
    contacts[i]= contact ={
            nom :p("Le Nom: "),
            numero:p("Le Numéro de téléphone: "),
            email:p("Adresse e-mail: "),
        };
    i++;
}
function afficher(){
    console.log("\n============ Les contacts dans le carnet =========");
    let j=1;
    for(let x of contacts){
        console.log(`   ---contact ${j}---`)
        for(let y in x){
            console.log(`   ${y}: ${x[y]}`);
        }
        j++;
    }
}
function modifier(){
    console.log("\n=============== Modifier un Contact ==============")
    let t=p("Entrer le nom de contact que vous modifiez: ");
    for(let x of contacts){
        if(x.nom === t && x){
            x.numero=p("Entrer le nouvelle numéro de téléphone: ");
            x.email=p("Entrer l'adresse e-mail: ");
        }
        else console.log("Le contact est untouvable.");
    }
}
function supprimer(){
    console.log("\n============== Supprimer un contact ==============")
    let t=p("Entrer le nom de contact que vous supprimez: ");
    r=[],k=r.length;
    for(let x of contacts){
        if(x.nom !== t){
            r[k] = x;
        }
        k++;
    }
    contacts=r;
    i=contacts.length
}
function rechercher(){
    console.log("\n============== Rechercher  un contact ==============")
    let t=p("Entrer le nom de contact que vous recherchez: ");
    for(let x of contacts){
        if(x.nom === t && x){
            for(let y in x){
                console.log(`   ${y}: ${x[y]}`);
            }
        }
        else console.log("Le contact est untouvable.");
    }
}
do{
    console.log("\n===============Liste des choix================")
    console.log(`    1. Ajouter un contact.
    2. Modifier un contact.
    3. Supprimer un contact.
    4. Afficher Tous les contacts.
    5. Rechercher un Contact.
    0. Quiter.
    `);

    var choix=Number(p("choisir un nombre s'il vous plait: "));
    switch(choix){
        case 0:
        break;
        case 1:ajouter();
        break;
        case 2:modifier();
        break;
        case 3:supprimer();
        break;
        case 4:afficher();
        break;
        case 5: rechercher();
        break;
        default:console.log(`\nchoix invalide!!!!!!!!!!!!!!`);
        break;
    }
}while(choix != 0)