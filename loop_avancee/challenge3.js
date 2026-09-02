const p = require('prompt-sync')();
let n = parseInt(p("Enter un nobmre: "));                           
var isp ="true";
for(let i=2;i<=n;i++){
    for(let j=2;j<i;j++){
        //console.log(` ${j} `)
        if(i%j == 0){isp="false";}
    }
    if(isp == "true") console.log(` ${i} `);
}