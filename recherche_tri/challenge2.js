const t=[45,13,2,8,96,17,23,78];
const t0=[]
console.log(t)
for(let i=1;i<t.length-1;i++){
    let key = t[i];
    let j=i-1;
    while(j>=0 && t[j]>key){
        t[j+1]=t[i];
        j--;
    }
    t[j+1]=key
} 
console.log(t)