//selector
const titleById = document.getElementById('title');
const titleByClass = document.getElementsByClassName('title');


console.log('Title by Id ', titleById);
console.log('Title by Class ', titleByClass);


// Query selector
const titleByQuerySelector = document.querySelectorAll('.title');
console.log('Title by query ', titleByQuerySelector);


const titleByQuerySelector2 = document.querySelector('p.title');
console.log('Title by query ', titleByQuerySelector2);


//innerHTML dùng để thay đổi nội dung của một phần tử, trước đó phải truy vấn nội dung đó trước bằng document.get...
titleById.innerHTML = 'Bài học mới';
titleById.className = 'super-title';

titleById.style.color = 'red';

//CRUD

// C- Create: innerHTML
// R - Read: document.get
// U - Update: appendChild
// D - Delete: remove
const footerNode = document.querySelector('footer');
const aElement = document.createElement('a');
aElement.innerHTML = 'link to GG';
aElement.href = 'google.com';
console.log(aElement);

footerNode.appendChild(aElement);
footerNode.removeChild(aElement);

// 
const todosData = ["Đánh răng", 'Đi học', 'Ăn trưa', 'Tập thể dục', 'Ăn tối', 'Đọc sách', 'Đi ngủ'];


// const ulNode = document.querySelector('ul.todos');

// for (let i=0; i<todos.length; i++){
//     const liElement = document.createElement('li');
//     liElement.innerHTML = todos[i];
//     ulNode.appendChild(liElement);
// }
const fetchDataButtonNode = document.getElementById('fetch-data-btn');
const fetchTodoListData = function () {
    const ulNode = document.querySelector('ul.todos');

    for (let i = 0; i < todosData.length; i++) {
        const liElement = document.createElement('li');
        liElement.innerHTML = todosData[i];
        ulNode.appendChild(liElement);
    };

    fetchDataButtonNode.innerHTML = 'Đã load thành công';
};

// fetchDataButtonNode.addEventListener('click', fetchTodoListData);

localStorage.setItem('language', 'english');
localStorage.setItem('currency', 'vnd');

localStorage.removeItem('isAuthenticated');
localStorage.setItem('timezone', 'GMT+7');

const timezone = localStorage.getItem('timezone');
console.log(timezone);

const timezoneElement = document.createElement('h2');
timezoneElement.innerHTML = timezone;

footerNode.appendChild(timezoneElement);




//form + clock: event capturing + event bubbling
//set Timeout, set interval
/*
console.log('Before setTimeOut');

const timer = setTimeout(function () {
    console.log('During setTimeOut');

}, 300);
clearTimeout(timer);

console.log('After setTimeOut');
*/

const countTime = document.getElementById('count-time');
let date = new Date();
let min = date.getMinutes();
let sec = date.getSeconds();
let hour = date.getHours();
const formatTimer = (num) => {
    if (num < 10){
        return '0'+ num;
    }
    return num;
}

setInterval(function () {
    // console.log(new Date().getMilliseconds());
    sec += 1;
    if (sec>=60){
        sec = 0;
        min +=1;
        if (min>=60){
            min = 0;
            hour+=1;
        }
    }

    countTime.innerHTML = `${formatTimer(hour)} : ${formatTimer(min)} : ${formatTimer(sec)}`;

}, 1000);

