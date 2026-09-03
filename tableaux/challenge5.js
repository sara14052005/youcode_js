var pro=require('prompt-sync')();
var t = [];
var d = Number(pro(`Enter la dimention: `)); 
var min;
console.log(`---Remblir le Tableau---`);
for(let i=0;i<d;i++){
    t[i] = Number(pro(`Enter la valeur ${i+1}: `)); 
    if(t[i] < min) min = t[i];
}
min=t[0];
for(let i=0;i<d;i++){
    if(t[i] < min) min = t[i];
}
console.log(`Min = ${min}`);