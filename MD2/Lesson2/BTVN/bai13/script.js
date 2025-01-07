//Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n. VD: n = 3
const n = Number(prompt("Nhập N:"));
let hinh="";

for(j = 1; j<=n;j++){
      hinh += '*';
}
for(i=1; i<=n;i++){
      console.log(hinh);
}