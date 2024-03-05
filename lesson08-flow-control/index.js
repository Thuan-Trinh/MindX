console.log('Lesson 08: Flow Control');

//Khối lệnh
console.log('Hello world');
let x = 6;
const PI = 3.14
{
    //Pi = 5;
    let x = 12;
    let y = 1
    console.log(x, y);
}

console.log(x);

//Câu lệnh điều kiện
let a = 3;
let b = 6;
if (a % 2 == 0) {
    console.log('a là số chẵn');
}
else {
    console.log('a là số lẻ');
}

if (a > b) {
    console.log('a lớn hơn b');
} else if (a < b) {
    console.log('a nhỏ hơn b');
} else {
    console.log('a bằng b');
}

//switch - case
let day;
let toDay = new Date().getDay();
switch (toDay) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thusday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
//luôn có lệnh break cuối mỗi case!
default:
    day = 'ngày không hợp lệ'
}
console.log(day);

if(toDay == 0){
    day = 'Sunday';
}else if(toDay==1){
    day = 'Monday';
}
console.log(day);

//Vòng lặp FOR
// for (<statement_1: Điều kiện Thực thi đầu tiên>; <statement_2: Điều kiện kết thúc vòng lặp>; <statement_3: Chạy sau vòng lặp>) {
// 	/* block of code */
// Chạy code trong vòng lặp
// }

let sum = 0;
for (let i=3; i<7;i+=2){
    sum +=i;
}
console.log(sum);

//Vòng lặp WHILE
let sum_while=0;
let j=0;
while(j<5){
    sum_while=sum_while+j;
    j++;
}
console.log(sum_while);


{
    for (let i = 0; i < 10; i++) {
        if (i === 3) { 
            break; 
            console.log('this will not run')
          }
          console.log(i); // 0 1 2 
      }
}//break là dừng tại điều kiện mong muốn, không thực hiện câu lệnh bên dưới nó

{
    for (let i = 0; i < 10; i++) {
        if (i % 2 !== 0) { 
            continue;
            console.log('this will not run')
          }
          console.log(i); // 0 2 4 6 8
      }
}//continue là nhảy qua điều kiện, không thực hiện câu lệnh bên dưới nó