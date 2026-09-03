var pro=require('prompt-sync')();
var t = [];
var d = Number(pro(`Enter la dimention: `)); 

console.log(`---Remblir le Tableau---`);
for(let i=0;i<d;i++){
    t[i] = Number(pro(`Enter la valeur ${i+1}: `)); 
}

var a = Number(pro(`Enter le nombre que vous pevez remplacer: `)); 
var b = Number(pro(`Enter la nouvelle valeur: `)); 
for(let i=0;i<d;i++){
    if(t[i] == a) t[i]=b;
}

console.log(`[${t}]`);