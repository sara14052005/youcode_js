//recherhce lineare
const t=[45,13,2,8,96,17,23,78];
const x=96;
let find=false;
console.log(`[${t}]`)
for(let i=0;i<t.length;i++){
    if(t[i]===x) find=true;
}
if(find) console.log("trouvée");
    else console.log("non trouvée");