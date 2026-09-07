const t=[10,20,20,15];
let max1=t[0],max2=t[0];
for(i=1;i<t.length;i++){
    if(t[i]> max1){
        max2=max1;
        max2=t[i];
    }
    if(t[i] > max2  && t[i] < max1){
        max2 = t[i];
    }
}
console.log(max2);