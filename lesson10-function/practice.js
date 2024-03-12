const mindXClass =
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


Yêu cầu:
    1. Viết function tính GPA
        + Input: math, chemistry, english
        + Output: GPA
    2. Viết function xếp loại
        + Input: GPA
        + Output: "Giỏi" | "Khá" | "Trung Bình" | "Yếu"
    3. Viết function xếp loại học sinh
    main()
    input: mảng lớp học
    logic: thông báo cho phụ huynh học sinh
    console.log('Học sinh', <> ,'Xếp loại', <>)
*/
function caculateGPA(math, chemistry, english) {
    return ((math + chemistry + english) / 3).toFixed(1);
};

function classifyStudent(gpa) {
    if (gpa >= 8) {
        return 'Học sinh Giỏi';
    } else if (gpa < 8 && gpa >= 6.5) {
        return 'Học sinh Khá';
    } else if (gpa < 6.5 && gpa >= 5) {
        return 'Học sinh Trung Bình'
    } else {
        return 'Học sinh Yếu';
    };
};

function main(students) {
    //dùng for ... of khi không quan tâm đến chỉ số index
    for (const student of students) {
        const studentGPA = caculateGPA(student.mathScore, student.englishScore, student.chemistry);
        const ranking = classifyStudent(studentGPA);
        console.log('Học sinh ' + student.fullname + ' ' + 'Xếp loại ' + ranking);
    }
};
main(mindXClass);


// BÀI 2
/*
    Viết một hàm, để xác định xem đơn đặt hàng này có đủ điểu kiện để miễn phí giao hàng hay không. 
    Miễn phí khi và chỉ khi:
        - Tổng chi phí của các mặt hàng ≥ $50.00

    freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false
    freeShipping({ "Flatscreen TV": 399.99 }) ➞ true
    freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true
*/

function freeShipping(cart) {
    // Your code here
    let totalAmountOfCart = 0;
    for (let key in cart) {
        const price = cart[key];
        totalAmountOfCart += price;
    }
    return totalAmountOfCart >= 50;

    // let sumCart = 0;
    // for (let item in cart){
    //     sumCart += cart[item];
    // };
    // return sumCart>=50;
};
console.log(freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }));
console.log(freeShipping({ "Flatscreen TV": 399.99 }));
console.log(freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }));


// BÀI 3
/*
    Giả sử bạn có một object lưu trữ thông tin, 
    của các học sinh đến từ nhiều quốc gia khác nhau dưới dạng key-value pairs như sau:
 
    const GUEST_LIST = {
        Randy: "Germany",
        Karla: "France",
        Wendy: "Japan",
        Norman: "England",
        Sam: "Argentina"
    }
 
    Hãy viết một function nhận vào `name` của một người trong `**GUEST_LIST**` và trả về như sau:
        - "Hi! I'm [name], and I'm from [country]."
        - Nếu `name` **không tồn tại** trong  `**GUEST_LIST**` , return: :   "Hi! I'm a guest."
 
 
    greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."
    greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."
    greeting("Monti") ➞ "Hi! I'm a guest."
*/

const GUEST_LIST = {
    Randy: 'Germany',
    Karla: 'France',
    Wendy: 'Japan',
    Norman: 'England',
    Sam: 'Argentina',
};
function greeting(name) {
    const isStudentExitInDict = GUEST_LIST.hasOwnProperty(name);

    const studetGreeting = "Hi! I'm " + [name] + ", and I'm from " + GUEST_LIST[name];
    const guestGreeting = "Hi! I'm a guest."

    return isStudentExitInDict ? studetGreeting : guestGreeting; //toán tử 3 ngôi: mệnh đề (true/false) thay thế cho câu lệnh if..else với đúng hoặc sai
}

console.log(greeting("Randy"));