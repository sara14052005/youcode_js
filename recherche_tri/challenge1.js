const t=[45,13,2,8,96,17,23,78];
console.log(t)
for(let i=0;i<t.length;i++){
    for(let j=0;j<t.length-i;j++){
        if(t[j]>t[j+1]){
            let c=t[j];
            t[j]=t[j+1];
            t[j+1]=c;
        }
    } 
    
}
console.log(t)