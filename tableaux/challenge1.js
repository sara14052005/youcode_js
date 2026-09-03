var pro=require('prompt-sync')();
var t = [];
console.log(`---Remblir le Tableau---`);
for(let i=0;i<10;i++){
   t[i]= Number(pro(`Enter la valeur ${i+1}: `)); 
}
console.log(`---Afficher le Tableau---`);
console.log(`[${t}]`);
