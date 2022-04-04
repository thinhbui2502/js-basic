// Function để thực hiện 1 số đoạn code để giải quyết 1 logic nào đó
// Có tính chất: có thể sử dụng lại nhiều lần.
// Nêu func ko return thì mặc định sẽ return undefined.

let width = 10;
let height = 3;
// global variable
let area; // undefined

/* function sayYourName(name) {
    document.write('hello e ' + name);
    return null;
}

sayYourName('Tom') */

function getArea(width, height) {
    // local variable
    let area = width * height;
    return area;
}

getArea(width, height);
console.log(area)
// console.log(getArea(width, height))


