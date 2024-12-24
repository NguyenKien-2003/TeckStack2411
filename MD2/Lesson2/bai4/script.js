let a;
do{
    a = Number(prompt("Nhập vào a (0 < a <= 100): "));
    if(a <=0 || a>100){
        console.log("Số nhập vào không hợp lệ")
    }else{
    if(a % 2 == 0){
        console.log("Số chẵn")
    }else{
        console.log("Số lẻ")
    }
}
}while(a <=0 || a>100);