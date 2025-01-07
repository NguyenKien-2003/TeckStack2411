// // for in dùng để lặp obj
// <Tên obj >.hasOwnProperty(Key) kiểm tra xem key này trong obj có tồn tại hay ko
const Person = {
    id :121212,
    age :13,
    name:'Nguyễn Văn A',
    languages: [': en','vi','fr'],
    scores:{
        math:4,
        english:5,
        literature:7
    }
}
let total_scores = 0;
let count = 0;
for(persons in Person.scores){
    total_scores = total_scores + Person.scores[persons];
    count++;
}
avg = total_scores / count;
console.log(avg);
console.log('-------------------------');
console.log('Họ và tên:' + Person.name);
console.log('Tuổi:' + Person.age);
console.log('Ngôn ngữ'+ Person.languages);
console.log('Điểm Trung bình: ' + avg);

if(avg >= 3 && avg <=5 ){
    console.log('Xếp loại học lực : Trung bình');
}else if(avg <= 8){
    console.log('Xếp loại học lực: Khá');
}else if(avg < 9){
    console.log('Xếp loại học lực : Giỏi');
}else if(avg <=10){
    console.log('Xếp loại học lực : Xuất Sắc');
}
console.log('-------------------------');