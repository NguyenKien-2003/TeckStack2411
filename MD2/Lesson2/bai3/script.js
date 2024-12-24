const a = 50;
let sum = 0;
let temp;
for(i = 0; i<=a; i++){
    console.log(i);
    sum += i;
}
for(i = 0; i<=a; i++){
    if(i % 2 == 0){
        console.log("Số chẵn trong khoảng: " ,i);
    }
    else{
        console.log("Số lẻ trong khoảng: " ,i);
    }
    
}

console.log("Tổng: " , sum);

for(i = a; i>=0; i--){
    console.log(i);
}