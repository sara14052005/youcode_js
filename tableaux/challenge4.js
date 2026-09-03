var pro=require('prompt-sync')();
var t = [];
var d = Number(pro(`Enter la dimention: `)); 
var max=0;
console.log(`---Remblir le Tableau---`);
for(let i=0;i<d;i++){
    t[i] = Number(pro(`Enter la valeur ${i+1}: `)); 
    if(t[i] > max) max = t[i];
}
console.log(`Max = ${max}`);
