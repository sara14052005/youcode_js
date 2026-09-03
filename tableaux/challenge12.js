var pro=require('prompt-sync')();
var t = [];
var d = Number(pro(`Enter la dimention: `)); 
console.log(`---Remblir le Tableau---`);
for(let i=0;i<d;i++){
    t[i] = Number(pro(`Enter la valeur ${i+1}: `)); 
}
console.log(`---Afficher les nombres pair---`);
for(let i=0;i<d;i++){
    if(t[i]%2 == 0) console.log(`${t[i]}`);
}

 