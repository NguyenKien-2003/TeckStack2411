const n = Number( prompt("Nhập vào tháng: "));
const nam = Number(prompt("Nhập năm"))

    switch(n){
        case 1,3,5,7,8,9,10,12: 
            alert("Tháng có 31 ngày");
            break;
        case 2:
            if(nam % 4 == 0 ){
            alert("Tháng 2 có 29 ngày");
            }
            alert("Tháng 2 có 28 ngày");
            break;
        case 4,6,9,11:
            alert("Tháng có 30 ngày");
            break;    
       default:
            alert("Tháng nhập vào không hợp lệ");
            break;
    }
    

