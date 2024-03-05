// 1. Bài tập 1
console.log('Bài tập 1')
let myName = 'Trinh Van Thuan';
let x = 28;
let isStudent = false;

console.log(typeof myName);
console.log(typeof x);
console.log(typeof isStudent);

// 2. Bài tập 2
console.log('Bài tập 2')
var a = 7;
var b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a %= b);

// Toán Tử
// Toán tử toán học
console.log('Toán tử');
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(3 ** 2);
console.log(7 % 4);

let i = 5;
i++;
// i--;
console.log(i);

// Toán tử gán
let u = 3;
let v = 5;

// u += v; //u = u+v=> u
// u-=v;
// u*=v;
// u /= v;
// u%=v;
u**=v;

console.log(u, v);


// Toán tử nối chuối
console.log('Toán tử nối chuỗi');
let str_x = 'Trịnh';
let str_y = 'Văn';
let str_z = 'Thuân';
console.log(str_x + ' Gia ' + str_y + ' ' + str_z);

// Toán tử so sánh
console.log('Toán tử so sánh');
console.log(2 =='2');  //chỉ so sáng giá trị
console.log(2 ==='2'); //so sánh cả giá trị và kiểu dữ liệu
console.log(2 != 3); //so sánh khác
console.log(2 >='2');

// Toán tử logic
console.log('Toán tử logic');
console.log((2 == 2) && (3>2));  // trả về true khi cả 2 mệnh đề đều đúng

console.log((2 == 2) || (3>5));  // trả về false khi cả 2 mệnh đề đều sai

console.log(!false);

