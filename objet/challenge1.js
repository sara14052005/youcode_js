const pro=require('prompt-sync')();
let user={
    nom:pro(`Entrer votre Nom: `),
    prenom:pro(`Entrer votre Prenom: `),
    age:Number(pro(`Entrer votre Age: `))
}
for (const key in user) {
    console.log(`${key}:${user[key]}`);    
}