//Kiểm tra số đưuọc nhập là chẵn hay lẻ
{
    let soNguyen = parseInt(prompt('Nhập một số nguyên dương bất kỳ:'));
    if (isNaN(soNguyen) || soNguyen <= 0) {
        console.log("Vui lòng nhập một số nguyên dương.");
    } else if (soNguyen % 2 === 0){
        console.log(`${soNguyen} là số chẵn`);
    }else{
        console.log(`${soNguyen} là số lẻ`);
    }

}


//Tính tổng từ 1 đến n (n là số nguyên dương do người nhập vào)
{
    let n = parseInt(prompt("Nhập một số nguyên dương n:"));
    if (isNaN(n) || n <= 0) {
        console.log("Vui lòng nhập một số nguyên dương.");
    } else {
        let tong = 0;
        for (let i = 1; i <= n; i++) {
            tong += i;
        }
        console.log(`Tổng của các số nguyên từ 1 đến ${n} là: ${tong}`);
    }
}




// Đổi tên tháng số thành chữ
{
    let soThang = parseInt(prompt("Nhập số tháng:")); 
        switch (soThang) {
            case 1:
                console.log("Tháng Một");
                break;
            case 2:
                console.log("Tháng Hai");
                break;
            case 3:
                console.log("Tháng Ba");
                break;
            case 4:
                console.log("Tháng Bốn");
                break;
            case 5:
                console.log("Tháng Năm");
                break;
            case 6:
                console.log("Tháng Sáu");
                break;
            case 7:
                console.log("Tháng Bảy");
                break;
            case 8:
                console.log("Tháng Tám");
                break;
            case 9:
                console.log("Tháng Chín");
                break;
            case 10:
                console.log("Tháng Mười");
                break;
            case 11:
                console.log("Tháng Mười Một");
                break;
            case 12:
                console.log("Tháng Mười Hai");
                break;
            default:
                console.log("Không hợp lệ!");
            break;
    }
}


// Kiểm tra số nguyên tố
{
    let number = parseInt(prompt("Nhập số nguyên dương bất kỳ:"));

    if (isNaN(number) || number <= 0) {
        console.log('Vui lòng nhập số hợp lệ!');
    } else if (number <= 1) {
        console.log(`${number} không phải là số nguyên tố`);
    }
    else {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
            // console.log(`${number} không phải là số nguyên tố.`);
            // break;
        }
        if (isPrime) {
            console.log(`${number} là số nguyên tố.`)
        }
        else {
            console.log(`${number} không là số nguyên tố.`);
        }
    }
}




// Hiển thị menu
console.log("Menu:");
console.log("1. Đặt bàn");
console.log("2. Xem menu");
console.log("3. Gọi món");
console.log("4. Thanh toán");

// Nhập lựa chọn từ người dùng
let luaChon = parseInt(prompt("Nhấn số để nhập lựa chọn của bạn:"));

// Xử lý lựa chọn
switch (luaChon) {
    case 1:
        console.log("Bạn đã chọn đặt bàn.");
        break;
    case 2:
        console.log("Bạn đã chọn xem menu.");
        break;
    case 3:
        console.log("Bạn đã chọn gọi món.");
        break;
    case 4:
        console.log("Bạn đã chọn thanh toán.");
        break;
    default:
        console.log("Lựa chọn không hợp lệ.");
        break;
}

// Nhập các hệ số từ người dùng
let a = parseFloat(prompt("Nhập hệ số a:"));
let b = parseFloat(prompt("Nhập hệ số b:"));
let c = parseFloat(prompt("Nhập hệ số c:"));

// Tính delta
let delta = b * b - 4 * a * c;

// Tính nghiệm
let x1, x2;
if (delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
} else if (delta === 0) {
    x1 = -b / (2 * a);
    console.log(`Phương trình có nghiệm kép: x = ${x1}`);
} else {
    console.log("Phương trình không có nghiệm thực");
}




// Mảng số nguyên đã cho
let arr = [5, 8, 2, 10, 6]; // Thay đổi mảng tại đây để kiểm tra với mảng khác

// Khởi tạo số lớn nhất và số lớn thứ hai
let max = -Infinity;
let secondMax = -Infinity;

// Lặp qua mảng để tìm số lớn nhất và số lớn thứ hai
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
    } else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i];
    }
}

// Kiểm tra nếu không có số lớn thứ hai
if (secondMax === -Infinity) {
    console.log("Không có số lớn thứ hai trong mảng.");
} else {
    console.log(`Số lớn thứ hai trong mảng là: ${secondMax}`);
}
