const prompt = require('prompt-sync')()
let mot_pass = prompt("Enter Le Mot de Passe: ");

for(let i of mot_pass){
    if(i <= 'a' || i >= 'z'){
        console.log("Le Mot de Passe doit contenir des lettres majuscules et minuscules ainsi que des chiffres!!!")
    }
    if(i <= 'A' || i >= 'Z'){
        console.log("Le Mot de Passe doit contenir des lettres majuscules et minuscules ainsi que des chiffres!!!")
    }
    if(i <= '0' || i >= '9'){
        console.log("Le Mot de Passe doit contenir des lettres majuscules et minuscules ainsi que des chiffres!!!")
    }
}