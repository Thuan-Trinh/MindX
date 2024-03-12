// Bài 1: Tính tổng các số chẵn từ 1 đến n
{
    let n = 10;
    let tongSoChan = 0;

    for (i = 2; i <= n; i += 2) {
        tongSoChan += i;
    }
    console.log('Tổng các số chẵn từ 1 đến', n, 'là:', tongSoChan);
}

// Bài 2: Tính giá tị của n! (n>=0)
{
    let n = 10;
    let giaiThua = 1;

    if (n < 0) {
        console.log('Không hợp lệ');
    }
    else if (n === 0) {
        console.log('Giai thừa của', n, 'có giá trị là:', giaiThua);
    }
    else {
        for (i = 1; i <= n; i++) {
            giaiThua *= i;
        }
        console.log('Giai thừa của', n, 'có giá trị là:', giaiThua);
    }
}



// Bài 3: Từ mảng ban đầu hãy liệt kê 
// kiểu dữ liệu của các giá trị trong mảng ban đầu

// input: ["214", true, false, 2, 2.15, [], null]
// expected output: ["string", "boolean", "boolean", "number", "number", "object", "object"]

let Array = ["214", true, false, 2, 2.15, [], null];
let output = []; //tạo mảng trống để thêm phần tử vào

for (let i = 0; i < Array.length; i++) {
    const datatypeOfElement = typeof Array[i]; //get typeof của từng phần tử trong mảng
    output.push(datatypeOfElement); //đẩy thêm typeof của phần tử vào mảng trống, push là đẩy thêm vào cuối
};
console.log("Output:", output);

/*  
    Bài 4: tìm giá trị nhỏ nhất trong mảng 1 chiều

    Bài 5: tìm giá trị lớn nhất trong mảng 1 chiều

    Bài 6: Sắp xếp mảng theo thứ tự tăng dần

    Bài 7 Sắp xếp mảng theo thứ tự giảm dần

    Bài 8:
    const employees = [
        { name: "John", age: 21, salary: 23000 },
        { name: "Steve",  age: 32, salary: 40000 },
        { name: "Martin",  age: 16, salary: 2700 },
        { name: "Cristiano Ronaldo",  age: 39, salary: 100000 },
        { name: "Messi",  age: 37, salary: 500 }
    ]

        a. Tính tổng lương nhân viên.
        b. Có bao nhiêu nhân viên lớn hơn 20 tuổi
        c. Có bao nhiêu nhân viên lớn hơn 25 tuổi và thu nhập nhỏ hơn 10000 dollars
*/

// Bài 4&5: Tìm giá trị nhỏ nhất/lớn nhất trong mảng 1 chiều

{
    console.log('Bài 4&5: Tìm giá trị nhỏ nhất và lớn nhất trong mảng 1 chiều \n');

    const numberArray = [1, 55, 36, 95, 9, 1, 255, 23];
    console.log('Cho mảng sau:', numberArray);
    let minValue = numberArray[0];
    let maxValue = numberArray[1];
    // let minValue = -Infinity;

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] <= minValue) {
            minValue = numberArray[i];
        } else if (numberArray[i] >= maxValue) {
            maxValue = numberArray[i];
        };
    };
    console.log('Giá trị nhỏ nhất trong mảng là:', minValue);

    console.log('Giá trị lớn nhất trong mảng là:', maxValue);
}

// Bài 6: Sắp xếp mảng 1 chiều theo thứ tự tăng dần

{

    console.log('Bài 6: Sắp xếp mảng 1 chiều theo thứ tự tăng dần \n');

    const arrayNumber = [10, 55, 36, 95, 9, 1, 255, 23];
    let length = arrayNumber.length;
    console.log('Cho mảng sau:', arrayNumber);

    for (i = 0; i < length; i++) {
        for (j = 0; j < length - 1; j++) {
            if (arrayNumber[j] > arrayNumber[j + 1]) {
                let temp = arrayNumber[j];
                arrayNumber[j] = arrayNumber[j + 1];
                arrayNumber[j + 1] = temp;
            }
        }
    }
    console.log('Mảng theo thứ tự tăng dần là: \n', arrayNumber,);
}

// Bài : Sắp xếp mảng 1 chiều theo thứ tự giảm dần'

{

    console.log('Bài 7: Sắp xếp mảng 1 chiều theo thứ tự giảm dần \n');

    const array = [10, 0, 36, 95, 9, 1, 255, 23];
    let length = array.length;
    console.log(length);
    console.log('Cho mảng sau:', array);

    for (i = 0; i < length; i++) {
        for (j = 0; j < length - 1; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    console.log('Mảng theo thứ tự giảm dần là:', array);
}

/* Bài 8:
    const employees = [
        { name: "John", age: 21, salary: 23000 },
        { name: "Steve",  age: 32, salary: 40000 },
        { name: "Martin",  age: 16, salary: 2700 },
        { name: "Cristiano Ronaldo",  age: 39, salary: 100000 },
        { name: "Messi",  age: 37, salary: 500 }
    ]

        a. Tính tổng lương nhân viên.
        b. Có bao nhiêu nhân viên lớn hơn 20 tuổi
        c. Có bao nhiêu nhân viên lớn hơn 25 tuổi và thu nhập nhỏ hơn 10000 dollars
    */
{
    console.log('Bài 8')
    const employees = [
        { name: "John", age: 21, salary: 23000 },
        { name: "Steve", age: 32, salary: 40000 },
        { name: "Martin", age: 16, salary: 2700 },
        { name: "Cristiano Ronaldo", age: 39, salary: 100000 },
        { name: "Messi", age: 37, salary: 500 }
    ];
    let length = employees.length;
    //a. Tính tổng lương nhân viên.
    let sumSalary = 0;
    for(i=0; i<length; i++){
        sumSalary +=employees[i].salary;
    }
    console.log('Tổng lương nhân viên là:', sumSalary);

    // b. Có bao nhiêu nhân viên lớn hơn 20 tuổi
    let x = 0;
    for(i=0; i<length; i++){
        if(employees[i].age>20){
            x+=1;
        }
    }
    console.log('Số nhân viên lớn hơn 20 tuổi là:', x);

    //c. Có bao nhiêu nhân viên lớn hơn 25 tuổi và thu nhập nhỏ hơn 10000 dollars
    let y = 0;
    for(i=0; i<length; i++){
        if(employees[i].age>25 && employees[i].salary<10000){
            y+=1;
        }
    }
    console.log('Số nhân viên lớn hơn 25 tuổi và thu nhập nhỏ hơn 10000 dollars là:', y);

}