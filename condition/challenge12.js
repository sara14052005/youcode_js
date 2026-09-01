const p = require('prompt-sync')();
let i1 = p("Entrer Le premier instant : ");
let i2 = p("Entrer Le deuxième instant : ");
if(i1.length == 8 && i2.length == 8){
    if(i1 == i2){
    console.log(`Il s'agit du même instant.`);
    }else{
        if(i1 <= i2) {
            console.log(`Le premier instant vient avant le deuxième.`);
        }else{
            console.log(`Le deuxième instant vient avant le premier.`);
        } 
    }
}else{
    console.log(`Invalide Entrer !!!!`);
}
