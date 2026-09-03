var pro=require('prompt-sync')();
var t1 = [];
var t2 = [];


var d1 = Number(pro(`Enter la dimention de 1er tableaux: `)); 
console.log(`---Remblir le 1er Tableau---`);
for(let i=0;i<d1;i++){
    t1[i] = Number(pro(`Enter la valeur ${i+1}: `)); 
}

var d2 = Number(pro(`Enter la dimentionde 2éme tableaux: `)); 
console.log(`---Remblir le 2éme Tableau---`);
for(let i=0;i<d2;i++){
    t2[i] = Number(pro(`Enter la valeur ${i+1}: `)); 
}
var t=[t1,t2]
console.log(`[${t}]`);
