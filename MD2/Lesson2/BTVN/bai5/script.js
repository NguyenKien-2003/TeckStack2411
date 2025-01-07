let a = Number(prompt("Nhập vào a: "));
let b = Number(prompt("Nhập vào b: "));
let x = Number(prompt("Nhập vào x: "));
for(i=a;i<=b;i++){
        if(i%x==0){
                console.log("Số nhỏ nhất chia hết cho x: ", i);
                break;
        }
}