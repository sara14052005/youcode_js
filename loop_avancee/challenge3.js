const p = require('prompt-sync')();
let n = parseInt(p("Enter un nobmre: "));                    
for(let i=2;i<=n;i++){
    var isp =true; 
    for(let j=2;j<i;j++){
        if(i%j == 0){isp=false;}
    }
    if(isp == true) console.log(` ${i} `);
}