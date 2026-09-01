const pro = require('prompt-sync')();
let  c = Number(pro('Enter la temperature en Celsius :'));
let k = c + 273.15;

console.log('La temperature en Kelvin est',k);