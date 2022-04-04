// If-else : rẽ nhánh
/* let a = 10;
let b = 5;
let c = 15;

if(a < b) {
    console.log('dung roi ban oi')
} else if (b > c) {
    console.log('con ga!')
} else if (a > c){
    console.log('ôi bạn ơi')
} else {
    console.log('ahihi em Phun cute')
}

if (a > b) {
    console.log("ok")
}

if (a > c) {
    console.log('okilah')
}

// Switch-case
// Thường sử dụng trong trường hợp có nhiều case
let day = 26;
switch (day) {
    case 24:
        console.log("yesterday");
        break;
    case 25:
        console.log("today");
        break;
    case 26:
        console.log("tomorrow");
        break;
    default:
        console.log("someday");
        break;
}
*/

// Toán tử 3 ngôi
let thinh = 26;
let phuong = 25;
// result = A ? B : C -> nếu A đúng thì result = B còn sai thì = C
let message = thinh < phuong ? "Thinh nhỏ hon Phuong" : thinh === phuong ? "Thinh bang Phuong" : "Thinh lớn hơn Phuong";
console.log(message)
