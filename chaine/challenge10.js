const pro=require('prompt-sync')();
let x =pro('Enter le text global: ');
let y =pro('Enter la parie cherchée : ');
let exist=false;
for(let i=0;i<x.length;i++){
    if(x[i] == y[0]){
        for(let j=0;j<y.length;j++){
            if(x[i]==y[j]) exist=true;
            else exist=false;
            i++;
        }
    }
}
if(exist) console.log(`"${y}" included in "${x}"`);
else console.log(`"${y}" not included in "${x}"`);