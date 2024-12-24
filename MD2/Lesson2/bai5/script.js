let a;
let sum = 0;
let count = 0;

do{
    a = Number(prompt("Nhập vào n:"));
    if(count < 5){
        count ++;
        sum += a;
    } 
}while(a>0)
console.log(sum);