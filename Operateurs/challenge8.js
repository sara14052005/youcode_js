const pro=require('prompt-sync')();
let age=Number(pro("Enter l'age: "));
let statut=pro("Enter le statut: ");

if(age>=18 && age<=35){
    if(statut== "etudiant" || statut != "salarie")
        console.log("vous remplissez les conditions d'accès à Youcode");
    else console.log("vous ne remplissez pas les conditions d'accès à Youcode");
}else console.log("vous ne remplissez pas les conditions d'accès à Youcode");