let n = Number(prompt("Nhập vào n: "));
let s =0 ;
for(i=1;i<=n;i++){
      s += 1/(n*(n+1));
}
console.log("Tổng S = ", s);