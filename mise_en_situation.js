//find 2nd min
// const arr=[24, 7, 89, 12, 53];
// let min_1=arr[0],min_2=arr[0];
// for(let x of arr){
//     if(x<min_1){
//         min_2=min_1;
//         min_1=x;
//     }else{
//         if(x<min_2 && x>min_1) min_2=x;
//     }
// }
// console.log(min_2)

//find long string & number of char in the array
// const t=["BMW","Fiat","Porsche","Dacia"]
// let b=0,w,n=0;

// for(let x of t){
//     let c=0
//     for(let y of x){
//         c++;
//         n++;
//     }
//     if(c>b){
//         w=x;
//         b=c;
//     } 
// }

// console.log(w)
// console.log(n)

//find 2nd max
// const t=[10,20,20,15];
// let max1=t[0],max2=t[0];
// for(i=1;i<t.length;i++){
//     if(t[i]> max1){
//         max2=max1;
//         max2=t[i];
//     }
//     if(t[i] > max2  && t[i] < max1){
//         max2 = t[i];
//     }
// }
// console.log(max2);

//              1[2]3[4]
// print======> 1[2]3[4]
//              1[2]3[4]
//              1[2]3[4]

// for(let i=1;i<=4;i++){
//     for(let j=1;j<=4;j++)
//         {
//             if(j%2 == 0) process.stdout.write(`[${j}]`);
//             else process.stdout.write(`${j}`);
//         } 
//     console.log("");
// }