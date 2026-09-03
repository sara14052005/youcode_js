/*function ispremier(x){
    for(let j=2;j<i;j++){
        if(x%j == 0) return false;
        else return true;
    }
}

const p = require('prompt-sync')();
let n = parseInt(p("Enter un nobmre: "));                    
for(let i=2;i<=n;i++){
    if(ispremier(i) == true) console.log(` ${i} `);
}
*/
function ispremier(x){
    for(let i=2;i<=x;i++){
    var isp =true; 
    for(let j=2;j<i;j++){
        if(i%j == 0){isp=false;}
    }
    if(isp == true) console.log(` ${i} `);
}
}
const p = require('prompt-sync')();
let n = parseInt(p("Enter un nobmre: "));                    
ispremier(n);