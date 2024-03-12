const classes =
    [
        {
            fullname: 'Nguyễn Văn A',
            mathScore: 10,
            englishScore: 8,
            chemistry: 6,
            gender: 'male',
            address: {
                street: 'Tân Bình',
                postalCode: 700260,
                district: 'Hoàng Mai',
            },
        },

        {
            fullname: 'Nguyễn Văn B',
            mathScore: 10,
            englishScore: 8,
            chemistry: 3,
            gender: 'female',
            address: {
                street: 'Quận Nhất',
                postalCode: 703623,
                district: 'Linh Đàm',
            },
        },

        {
            fullname: 'Nguyễn Văn C',
            mathScore: 6,
            englishScore: 5,
            chemistry: 9,
            gender: 'male',
            address: {
                street: 'Tân Bình',
                postalCode: 700360,
                district: 'Cầu Giấy',
            },
        },

        {
            fullname: 'Nguyễn Văn D',
            mathScore: 8,
            englishScore: 8,
            chemistry: 5,
            gender: 'female',
            address: {
                street: 'Tân Bình',
                postalCode: 706260,
                district: 'Thủ Đức',
            },
        },
    ]

/*
1. Xếp loại học sinh của lớp C4E JS148
GPA= (math + english + chemistry)/3;
+Giỏi: GPA >=8.0;
+Khá: GPA >=6.5 && GPA<8.0
+trung Bình: GPA<6.5 && GPA >=5.0
+Yếu: GPA <5.0

2. Thông báo kết quả cho phụ huynh học sinh theo cú pháp:
'học sinh <name> xếp loại: <XYZ>
*/


const names = [
    "Hoa", "Vinh", "Hùng", "Lan", "Ánh", "Bích", "Tài"
]

// cú pháp viết function: function + functionName(tham số đầu vào/đối số) + {}
function sayHello(name) {
    // function scope
    console.log('Xin chào', name, '!');
}

for (i = 0; i < names.length; i++) {
    // trigger / invoke function
    const namingOfStudent = names[i];
    sayHello(namingOfStudent); //sayHello('Hoa')
}

//Caculator
/*
Viết hàm tính tổng 2 số trả về giá trị
là tổng 2 số đó.

Input: a, b
Logic: a+b
Output: tổng của 2 số
*/

function sum(a, b) {
    return a + b;
}

const sumBetweenForAndFive = sum(4, 5);
console.log('sumBetweenForAndFive', sumBetweenForAndFive);

// Viết 1 cái máy tính
//Input: a, b, sign = "+", "-", "*", "/"
// Output: Giá trị của phép tính

function caculator(a, b, operator) {
    let result = null;
    //Your code here
    switch (operator) {
        case '+':
            return a+b;
        case '-':
            return a-b;

        case '*':
            return a*b;

        case '/':
            return a/b;

        default:
            result = 'Operator is invalid';
    }
    return result;
}

console.log(caculator(10, 5, '+'));
console.log(caculator(10, 5, '-'));
console.log(caculator(10, 5, '*'));
console.log(caculator(10, 5, '/'));