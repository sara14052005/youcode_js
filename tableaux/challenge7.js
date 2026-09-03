var pro=require('prompt-sync')();
var t = [];
var d = Number(pro(`Enter la dimention: `)); 

console.log(`---Remblir le Tableau---`);
for(let i=0;i<d;i++){
    t[i] = Number(pro(`Enter la valeur ${i+1}: `)); 

}
for(let i=0;i<d;i++){
    for(let j=0;j<d;j++){
        if(t[i]<t[j]){
            let c=t[i];
            t[i]=t[j];
            t[j]=c;
        } 
    } 
}
console.log(`---Afficher la Table---`);
console.log(`[${t}]`);