const p = require('prompt-sync')();
let n = Number(p("Enter un nobmre: ")); 
let founded=false;
let t=[1,2,3,4,5,6,7,8,9];
while(t.length >1){
    let c=parseInt(t.length/2);
    if(t[c] == n){
        founded=true;
        t=[];
    }else{
        if(t[c]<n){
            t=t.slice(c,t.length);
        }else{
            t=t.slice(0,c);
        }
    }
}
if(founded) console.log(`${n} est trouvé`);
else console.log(`${n} n'est pas trouvé`);