const taille =4;
for(let i=1;i<=4;i++){
    for(let j=1;j<=i;j++){
        if(j%2 == 0) process.stdout.write(`[${j}]`);
        else process.stdout.write(`${j}`);
    }
    console.log("")
}