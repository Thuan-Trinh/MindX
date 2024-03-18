const btnReset = document.getElementById('reset');
const btnSubmit = document.getElementById('submit');
const textContent = document.getElementById('text-content');
const message = document.getElementById('message');
let moneyValue = document.getElementById('money');
let peoplevalue = document.getElementById('people');


const displayAlert = () => {
    alert('Vui lòng nhập đủ dữ liệu!');
}


function performCalculation() {
    // Lấy giá trị của hai ô input
    let inputValue1 = moneyValue.value;
    var inputValue2 = peoplevalue.value;

    // Kiểm tra xem cả hai ô input có giá trị hay không
    if (inputValue1.trim() !== '' && inputValue2.trim() !== '') {
        // Nếu không rỗng, có dữ liệu đã được nhập vào cả hai ô input
        // Thực hiện phép tính
        let number1 = parseFloat(inputValue1);
        let number2 = parseFloat(inputValue2);
        let result = (number1 / number2).toFixed(2);
        message.classList.remove('active');
        // textContent.innerHTML = ` Đang tính toán... `;

        let num = 0;
        let interval = setInterval(() => {
            num += 1;
            textContent.innerHTML = ` Đang tính toán... ${num}%`;

            if (num >= 100) {
                clearInterval(interval);
            }
        },30);
        // Hiển thị kết quả
        setTimeout(() => {
            textContent.innerHTML = ` Với số tiền ${number1}đ chia cho ${number2} người, thì mỗi người
            cần trả ${result}đ `;
            message.classList.add('active');

        }, 4000);

    } else {

        // Nếu một trong hai ô input rỗng, không có dữ liệu nào được nhập vào
        displayAlert();

    }
}
btnSubmit.addEventListener('click', performCalculation);
btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    // Đặt lại giá trị của hai ô input
    moneyValue.value = '';
    peoplevalue.value = '';
    moneyValue.focus;

    // Xóa nội dung hiển thị kết quả
    textContent.innerHTML = 'Nhập số liệu vào các ô bên trên để có kết quả';
});



