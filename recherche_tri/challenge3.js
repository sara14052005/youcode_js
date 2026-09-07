//selection sort
const t=[45,13,2,8,96,17,23,78];
console.log(`[${t}]`)
for(let i=0;i<t.length;i++){
    for(let j=0;j<t.length;j++){
        if(t[i]<t[j]){
            let temp=t[j];
            t[j]=t[i];
            t[i]=temp;
        }
    }
}
console.log(`[${t}]`)