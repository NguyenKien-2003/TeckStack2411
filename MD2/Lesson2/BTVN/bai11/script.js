let randomNumber =  Math.floor(Math.random() * 100);
let answer;
count = 0;
console.log(randomNumber);
do{
answer = Number(prompt("Nhập vào đáp án: "));
count ++;

if(answer == randomNumber){
      alert("Đoán đúng");
      break;
}else{
      alert("Đoán sai !");
}
}while(count < 5)
if(answer != randomNumber){
      alert("Thua cuộc! Đáp án: " + randomNumber);
}