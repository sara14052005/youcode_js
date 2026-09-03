var pro=require('prompt-sync')();
var t = [];
var d = Number(pro(`Enter la dimention: `)); 
var find=false
console.log(`---Remblir le Tableau---`);
for(let i=0;i<d;i++){
    t[i] = Number(pro(`Enter la valeur ${i+1}: `)); 
}

var a = Number(pro(`Enter le nombre que vous pevez chercher: `)); 
for(let i=0;i<d;i++){
    if(t[i] == a) find =true
}

if(find == true) console.log(`${a} se trouve dans le tableau`);
else console.log(`${a} se ne trouve pas dans le tableau`);