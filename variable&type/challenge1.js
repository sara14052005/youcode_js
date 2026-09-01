const pro = require('prompt-sync')(),
    nom = pro('Veuillez saisir votre nom:'),
    prenom = pro('Veuillez saisir votre prenom:'),
    age = pro('Veuillez saisir votre age:'),
    sexe = pro('Veuillez saisir votre sexe:'),
    email = pro('Veuillez saisir votre email:');

console.log(`-------- vos informations personnelles-------
            Nom : ${nom}
            Prenom : ${prenom}    
            Age : ${age}    
            Sexe : ${sexe}    
            Email : ${email}    
    `);