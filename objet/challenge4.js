const pro=require('prompt-sync')();
let point={
    x:Number(pro(`Entrer X: `)),
    y:Number(pro(`Entrer Y: `))
}
console.log(`M(${point.x},${point.y})`);