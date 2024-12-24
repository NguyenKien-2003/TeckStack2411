const n = prompt("Nhập vào n: ");
if(n>0 && n<=10){
    if(n<4){
        console.log('Hoc sinh kém');
    }else if(n<5){
        console.log('Học sinh yếu');
    }else if(n<6.5){
        console.log('Học sinh Trung bình')
    }else if(n<7){
        console.log('Học sinh khá');
    }else if(n<7.5){
        console.log('Học sinh hơi khá');
    }else if(n<8){
        console.log('Học sinh tiệm cận tốt');
    }else if(n<9){
        console.log('Học sinh giỏi');
    }else{
        console.log('Học sinh Xuất sắc');
    }
}else{
    alert("N nhập vào không hợp lệ")
}
