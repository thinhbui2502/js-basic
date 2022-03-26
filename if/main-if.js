//0, False, chuỗi rỗng, NaN: not a number, Undefined, null -> những thằng này sẽ bị trả về False

let age = 'aaaa';
let demo = NaN;
// mọi điều kiện trong ngoặc ( ) sẽ đc parse về Boolean
if (!age) {
    console.log('ting ting')
} else {
    console.log('te te')
}

