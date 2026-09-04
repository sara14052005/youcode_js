const pro=require('prompt-sync')();
let user={
    nom:pro(`Entrer votre Nom: `),
    prenom:pro(`Entrer votre Prenom: `),
    age:Number(pro(`Entrer votre Age: `))
}
console.log("Le nom : "+user.nom);
console.log("Le Prenom : "+user.prenom);
console.log("L\'age : "+user.age);