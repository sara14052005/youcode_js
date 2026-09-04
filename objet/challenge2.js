const pro=require('prompt-sync')();

let user={
    nom:"Belhamouchi",
    prenom:"Ali",
    note:[15, 14, 16, 13]
}

console.log("Le nom : "+user.nom);
console.log("Le Prenom : "+user.prenom);
console.log("Les Notes : "+(user.note).join(" "));