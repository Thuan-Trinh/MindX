//1. Tính tổng các số từ 1 đến n
let n = 5;
let result = 0;

for (let i = 1; i <= n; i++) {
    result += i;
}

console.log("Tổng các số từ 1 đến n là:", result);


// 1.ARRAY
// array, element, index, length
// index bắt đầu từ 0 -> kết thúc tại (length - 1)

let revenues = [100, 300, 80, 100, 150, 300, 400];
let theNumberOfDays = revenues.length;

console.log("The number of days:", theNumberOfDays)
console.log("Revenue of the first day: ", revenues[0]);
//Độ dài của mảng
let theNumberOfRevenues = revenues.length;
console.log("Tổng số ngày bán hàng là", theNumberOfRevenues) // 7 days 

// Doanh thu ngày đầu tiên
let firstRevenue = revenues[0]
let lastRevenue = revenues[theNumberOfRevenues - 1]
// n gia tri: index 0 -> n-1

console.log('sdsdds ', revenues[100]);

// Array manpulation: Thao tác với mảng 1 chiều: thêm, xóa, sửa
// let revenues = [100, 300, 80, 100, 150, 300, 400];
// push() thêm vào cuối mảng
revenues.push(200);

//unshift() là thêm vào đầu mảng
revenues.unshift(150);

//pop() xóa cuối
revenues.pop();

//shift() xóa đầu
revenues.shift();

//Cách duyệt mảng như thế nào?
let totalOfRevenues = 0;
for (let i = 0; i < revenues.length; i++) {
    console.log(`Doanh thu ngày thứ ${i + 1} là $${revenues[i]}`);
    totalOfRevenues += revenues[i];
    
}
console.log(`Tổng doanh thu của ${revenues.length} ngày là ${totalOfRevenues}`);


const bookRevenues = [123, 10, 200, 15];

const mergedRevenues = revenues.concat(bookRevenues);
console.log('Doanh thu tổng hợp:', mergedRevenues);

// Muốn cắt mảng từ vị trí thứ a tới b
const sliceArrayOne = mergedRevenues.slice(0,4);
console.log(sliceArrayOne);


// OBJECT

// product
//title, quantity, price, sizes
const product = {
    title: 'Quần kaki',
    quantity: 100,
    price: 200000,
    sizes: ["X", 'M', 'XL', '2XL', '3XL'],
    image:{
        scr: 'https://image.jpg',
        width: 200,
        height: 200,
    },
    color: 'Trắng',
};
console.log('Thông tin sản phẩm: ', product);


// Duyệt object: object manipulation
// Truy xuất thông tin từ object
const productThumbnailUrl = product.image.scr;
console.log('link hinh: ', productThumbnailUrl);
// for...in, for...of
for (let objectKey in product){
    // dynamic key
    const objectValue = product[objectKey];
    console.log('Key là:', objectValue);
};


if(product.hasOwnProperty('color')){
    console.log('Sản phẩm này có thuộc tính color là:', product.color);
}else{
    console.log('Sản phẩm không có thuộc tính color');
}




