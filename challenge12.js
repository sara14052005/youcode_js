const p = require('prompt-sync')();
let n = Number(p('Nombre :')),
   u = parseInt(n/1000),
   d = (parseInt((n%1000)/100)*10)*10,
   c= (parseInt((n%100)/10))*100,
   m= (n%10)*1000,
   i=m.toString()+c.toString()+d.toString()+u.toString();
console.log(`inverse = ${i}`); 