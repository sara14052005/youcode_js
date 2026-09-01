const p = require('prompt-sync')();
let date = p("Entrer une date sous form de JJ/MM/AAAA: ");
let m = date.slice(3,5);
//console.log(`${date.length}`)
if(date.length == 10){
    switch(m){
    case '01':if(date.slice(0,2)>=1 && date.slice(0,2)<=31)
                console.log(`${date.slice(0,2)}-Janvier-${date.slice(6,10)}`);
                else console.log("Date Invalide");
    break;
    case '02':if(date.slice(0,2)>=1 && date.slice(0,2)<=29)
                console.log(`${date.slice(0,2)}-Février-${date.slice(6,10)}`);
                else console.log("Date Invalide");
    break;
    case '03':if(date.slice(0,2)>=1 && date.slice(0,2)<=31)
                console.log(`${date.slice(0,2)}-Mars-${date.slice(6,10)}`);
                else console.log("Date Invalide");
    break;
    case '04':if(date.slice(0,2)>=1 && date.slice(0,2)<=30)
                console.log(`${date.slice(0,2)}-Avril-${date.slice(6,10)}`);
                else console.log("Date Invalide");
    break;
    case '05':if(date.slice(0,2)>=1 && date.slice(0,2)<=31)
                console.log(`${date.slice(0,2)}-Mai-${date.slice(6,10)}`);
                else console.log("Date Invalide");
    break;
    case '06':if(date.slice(0,2)>=1 && date.slice(0,2)<=30)
                console.log(`${date.slice(0,2)}-Juin-${date.slice(6,10)}`);
                else console.log("Date Invalide");
    break;
    case '07':if(date.slice(0,2)>=1 && date.slice(0,2)<=31)
                console.log(`${date.slice(0,2)}-Juillet-${date.slice(6,10)}`);
                else console.log("Date Invalide");
    break;
    case '08':if(date.slice(0,2)>=1 && date.slice(0,2)<=31)
                console.log(`${date.slice(0,2)}-Août-${date.slice(6,10)}`);
                else console.log("Date Invalide");
    break;
    case '09':if(date.slice(0,2)>=1 && date.slice(0,2)<=30)
                console.log(`${date.slice(0,2)}-Septembre-${date.slice(6,10)}`);
                else console.log("Date Invalide");
    break;
    case '10':if(date.slice(0,2)>=1 && date.slice(0,2)<=31)
                console.log(`${date.slice(0,2)}-Octobre-${date.slice(6,10)}`);
                else console.log("Date Invalide");
    break;
    case '11':if(date.slice(0,2)>=1 && date.slice(0,2)<=30)
                console.log(`${date.slice(0,2)}-Novembre-${date.slice(6,10)}`);
                else console.log("Date Invalide");
    break;
    case '12':if(date.slice(0,2)>=1 && date.slice(0,2)<=31)
                console.log(`${date.slice(0,2)}-Décembre-${date.slice(6,10)}`);
                else console.log("Date Invalide");
    break;
    default:console.log("Date Invalide")
}
}else{console.log("Date Invalide");}