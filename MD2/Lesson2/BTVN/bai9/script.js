//Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l.
let s = prompt("Nhập vào chuỗi s");
console.log(s.length);
let l = Number(prompt("Nhập vào l: "));
// for(i=l; i>=s.length; i--){
//       s = '0' + s;
// }
while(s.length < l){
      s+='a';
}
console.log("Chuỗi s có l ký tự: ", s);