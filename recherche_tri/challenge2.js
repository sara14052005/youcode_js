const t=[45,13,2,8,96,17,23,78];
console.log(`[${t}]`)
for(let i=1;i<t.length;i++){
    let key = t[i];
    let j=i-1;
    while(j>=0 && t[j]>key){
        t[j+1]=t[j];
        j--;
    }
    console.log(`[${t}]`)
    t[j+1]=key
} 
console.log(`[${t}]`)