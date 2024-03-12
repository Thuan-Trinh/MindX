/*
        ### Bài 1

Viết một function Javascript in ra các số từ 1 đến 15 **trên 1 dòng** thỏa mãn điều kiện sau:

- Nếu số đó ***chia hết cho 3*** ⇒ in ra **"Fizz"**
- Nếu số đó ***chia hết cho 5*** ⇒ in ra "**Buzz"**
- Nếu số đó ***chia hết cho 3 và 5***⇒ in ra **"FizzBuzz"**

**Output**: là một **string** thõa yêu cầu đề bài như trên.
*/
{
    function fizzBuzz() {
        let result = "";
        for (let i = 1; i <= 15; i++) {
            let str = "";
            if (i % 3 === 0) str += "Fizz";

            if (i % 5 === 0) str += "Buzz";

            if (str !== "") result += str + " ";
        };
        return result;
    };
    console.log(fizzBuzz());
}




// ### Bài 2 Count Vowels

// Viết một Javascript function, đếm số lượng các vowels trong một chuỗi

// Biết rẳng **`vowels = { 'e' , 'u', 'o' ,'a' ,'i'}`** 

// Mỗi `test case` đúng: `5 points` 

// **Input**: Một string 

// **Output**: Số lượng vowels (có xử lý ngoại lệ)

{
    function countVowels(str) {
        const vowels = ['e', 'u', 'o', 'a', 'i'];

        let count = 0;
        let strNew = str.toLowerCase(); //chuyển đổi string về chữ viết thwuongf hoàn toàn để dễ so sánh

        for (let char of str) {
            if (vowels.includes(char)) count++;
        };
        return count;
        ;
    }
    console.log(countVowels('Hello World'));

}

// ### Bài 3:

// Viết chương trình xóa các element trùng trong mảng

// **Input**: mảng 1 chiều

// **Output**: mảng đã được remove các phần tử trùng

{
    function deleteDuplicate(array) {
        let output = [];

        for (let item of array) {
            if (!output.includes(item)) output.push(item);

        };
        return output;
    };
    let arr = ["one", "one", "one", "two", "two", "three", "one"];
    console.log(deleteDuplicate(arr));
}

// ### Bài 4: Kiểm tra 1 chuỗi có phải là chuỗi Palindrome hay không

// Palindrome là một từ hoặc một cụm từ mà khi ta đọc xuôi hoặc đọc ngược thì nó cũng như vậy, ví dụ từ moom, racecar

// Nếu:

// - Là chuỗi Palindrome ⇒ Return true
// - Không là chuỗi Palindrome ⇒ Return false

{
    function isPalindrome(strArray) {
        strArray = strArray.toLowerCase(); //chuyển đổi chuỗi thành dạng chữ thường
        let reversedStrArray = strArray.split('').reverse().join(''); //split chuyển chuỗi thành mảng các kí tự, reverse để đảo ngược mảng và join để nối các kí tự lại thành chuỗi mới
        return strArray === reversedStrArray;
    };
    const array = 'moom';
    console.log(isPalindrome(array));
};



/*
    BÀI 5:
  - Trong đó:
    - workingTime: là số giờ làm việc trên trên tháng
    - salary: là lương/ 1h làm việc
 */

// Cau a: Viết hàm tính tổng lương công ty phải trả trong 1 tháng
// Goi y: Luong nhan vien = workingTime * salary 
{
    function getTotalSalaryOfCompany(array) {
        let sumSalary = 0;
        let len = array.length;
        for (i = 0; i < len; i++) {
            let x = array[i].workingTime;
            let y = array[i].salary;
            let salaryEach = x * y;
            sumSalary += salaryEach;
        };
        return sumSalary;
    };
    const employeesInfo = [
        { name: "David", workingTime: 98, salary: 10 },
        { name: "Luiz", workingTime: 78, salary: 20 },
        { name: "Silva", workingTime: 165, salary: 25 },
        { name: "Santos", workingTime: 215, salary: 30 },
        { name: "Alex", workingTime: 143, salary: 28 },
    ];
    console.log(getTotalSalaryOfCompany(employeesInfo));
}
// getTotalSalaryOfCompany() →  17119

//Cau b: Viet ham tinh luong cua 1 nhan vien bat ki trong danh sach employeesInfo
/*
  - Lương của nhân viên = workingTime * salary + bonus
  - Cách tính bonus:
    - Nếu số giờ làm việc >= 150: bonus = 200
    - Nếu số giờ làm việc >= 100 và < 150: bonus = 150
    - Nếu số giờ làm việc >= 50 và < 100 : bonus = 100
    - Nếu số giờ làm việc  < 50: bonus = 50
 */
/*
    - Input: ten 1 nhan vien bat ki trong employees list
    - Output: Luong cua nhan vien do
    - Goi y: su dung ham obj.hasOwnProperty(key) de kiem tra key co ton tai trong obj hay khong.
    - Co the tach nho logic tinh bonus thanh 1 function rieng => De dang hon.
    */
{
    //function tính bonus
    function bonusMoney(workingTime) {
        if (workingTime >= 150) {
            return 200;
        } else if (workingTime >= 100 && workingTime < 150) {
            return 150;
        } else if (workingTime >= 50 && workingTime < 100) {
            return 100;
        } else return 50;
    }

    function getTotalSalaryOfEmployee(name) {
        for (let employee of employeesInfo) {
            if (employee.hasOwnProperty('name') && employee.name === name) {
                let bonus = bonusMoney(employee.workingTime);
                let salaryStaff = employee.workingTime * employee.salary;
                let sumSalaryStaff = salaryStaff + bonus;
                return 'Tiền lương của nhân viên ' + employee.name + ' là: $' + sumSalaryStaff;
            };
        };
        return 'Nhân viên không tồn tại!';
    }
    const employeesInfo = [
        { name: "David", workingTime: 98, salary: 10 },
        { name: "Luiz", workingTime: 78, salary: 20 },
        { name: "Silva", workingTime: 165, salary: 25 },
        { name: "Santos", workingTime: 215, salary: 30 },
        { name: "Alex", workingTime: 143, salary: 28 },
    ];
    console.log(getTotalSalaryOfEmployee("Lenin")); //=> "Nhân viên không tồn tại"
    console.log(getTotalSalaryOfEmployee("Alex"));//=> "Alex's salary: $4154"
    console.log(getTotalSalaryOfEmployee("Luiz")); //=> "Luiz's salary: $1660"
}

// ### Bài 6

// Cho một mảng số nguyên `nums` và một số nguyên `target`, hãy trả về các chỉ số của hai số sao cho tổng của chúng là `target`.
{
    function twoSum(array, target) {
        const numIndex = {}; //khởi tạo object để lữu trữ đối tượng để so sánh
        let result = []; //khởi tạo mảng để lưu trữ các cặp kết quả thỏa màn
        let len = array.length;
        for (let i = 0; i < len; i++) { //tạo vòng lặp chạy qua từng phần tử trong mảng cho sẵn
            let minusIndex = target - array[i]; //gán giá trị hiệu của target với từng phần tử trong mảng đã cho
            if (numIndex.hasOwnProperty(minusIndex)) { //Kiểm tra xem trong object lưu trữ đã có giá trị hiệu chưa
                result.push([numIndex[minusIndex], i]); //nếu có rồi thì thêm mảng bao gồm chỉ số của đối tượng trong object và chỉ số đang kiểm tra
            };
            numIndex[array[i]] = i;//nếu chưa thì gán phần tử và chỉ số của nó vào object lưu trữ để so sánh tiếp
        };
        return result;//hết vòng lặp k có kết quả thỏa mãn thì trả về mảng rỗng
    };
    //Test
    const array_1 = [12, 56, 89, 45];
    console.log(twoSum(array_1, 101));
}