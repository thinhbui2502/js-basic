//----------------oOo---------------
// == chỉ so sánh giá trị, KHÔNG so sánh kiểu dữ liệu
// === so sánh cả kiểu dữ liệu và giá trị
//----------------oOo---------------

// &&: and
// ||: or
// !: phủ định
//----------------oOo---------------

// 1. Kiểu dữ liệu nguyên thủy (Primitive data)
let a = 1; // number
console.log(typeof a)
let b = 'hello'; // string
let c = true; // Boolean
let d = undefined; // undefined
console.log(typeof d)
let e = null; // null
console.log(typeof e)
let f = Symbol('something'); // unique
let g = Symbol('something');
console.log(typeof f)

//2. Kiểu dữ liệu phức tạp (Complex data): Object, Function
// a. Object
let person = {
    name: 'Tommy',
    //key - value
    age: 18,
    gender: 'Male'
}
console.log(person.name);
console.log(person.age);

let list = [1, 5, 'john', true];
console.log(typeof list)
console.log(list[2]);
// b. Function
// parameter
function getArea(width, height) {
    return width * height;
}
console.log(typeof getArea())

