var pro=require('prompt-sync')();
var t = [];
var d = Number(pro(`Enter la dimention: `)); 

console.log(`---Remblir le Tableau---`);
for(let i=0;i<d;i++){
    t[i] = Number(pro(`Enter la valeur ${i+1}: `)); 

}
console.log(`---Afficher la Table---`);
console.log(`[${t.reverse()}]`);