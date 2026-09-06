const t=[45,13,2,8,96,17,23,78];
console.log(t)
var d=t.length-2;
console.log(d)
for(let i=0;i<t.length-1;i++){
    for(let j=0;j<=d;j++){
        if(t[j]>t[j+1]){
            let c=t[j];
            t[j]=t[j+1];
            t[j+1]=c;
        }
    } 
    d--;
    
}
console.log(t)