let n = Number(prompt("Nhập vào n: "));
let count = 0;
for(i=1;i<=n;i++){
      if(n%i==0){
            count ++;
            
      }
}
if(count == 2){
      console.log("N là số nguyên tố !")
}else{
      console.log("N không phải số nguyên tố")
}
