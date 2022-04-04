// 1. for
// for trong for ít được dùng, khuyến khích tìm cách khác tối ưu hơn
// vì for trong for sẽ làm tăng độ phức tạp của thuật toán (n*n)
/*for (let i = 7; i >= 0; i--) {
    console.log(i)
    for(let j = 4; j >= 0; j--) {
        console.log(j)
    }
}*/

// mảng 2 chiều - Matrix - Ma trận
/* let vehicle = [['Kia', 'Toyota'], ['Vision', 'Dream', 'Sh'], ['mini', 'xGame']];
let languages = ['JAVA', 'JS', 'Python']; // mang 1 chieu
console.log(languages[2])
console.log(vehicle[0][1])
console.log(vehicle[1][1])

for (let i = 0; i<languages.length; i=i+1) {
     console.log(languages[i]);
}

//format code: Ctrl + Alt + L
for (let i = 0; i < vehicle.length; i++) {
    console.log(vehicle[i])
    for (let j = 0; j < vehicle[i].length; j++) {
        console.log(vehicle[i][j])
    }
} */

// 2. while
// nhớ có logic để kết thức vòng lặp
let i = 5;
// while (i >= 0) {
//     console.log(i);
//     i--;
// }

// 3. Do while
// Sẽ thực hiện ít nhất 1 lần dù điều kiện có không thỏa mãn.
do {
    i--;
    console.log(i);
} while (i >= 9);
