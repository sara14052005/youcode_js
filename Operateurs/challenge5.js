const pro=require('prompt-sync')();
let x = Number(pro("Enter le 1er nombre: "));
let h = parseInt(x/3600),
    m = parseInt((x/60)%60),
    s = parseInt((x%60)%60);

console.log(`${h} heures, ${m} minutes et ${s} secondes.`)