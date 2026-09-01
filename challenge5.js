const p = require('prompt-sync')();
let t = p('Entrer la temperature pour afficher l\'état de l\'eau :');
if(t < 0){
    console.log('Solide');
}else{
    if(t >= 0 && t < 100){
        console.log('Liquide');
    }else{
        console.log('Gaz');
    }
}
