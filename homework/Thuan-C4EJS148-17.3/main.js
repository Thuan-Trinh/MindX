
// Bài 1
const hoverButton = document.getElementById('button-1');
function displayAlert() {
    alert('Testing alert notification!');
}
hoverButton.addEventListener("mouseover", displayAlert);

// Bài 2

const listItems = document.querySelectorAll('#list-items ul li');
const itemCount = listItems.length;

const resultCount = document.getElementById('result');
resultCount.textContent = itemCount;

// Bài 3
const colorTextButtonChange = document.getElementById('button-3');

colorTextButtonChange.addEventListener('mouseenter', function () {
    colorTextButtonChange.style.color = "white";
    colorTextButtonChange.style.backgroundColor = 'black';
})

colorTextButtonChange.addEventListener('mouseout', function () {
    colorTextButtonChange.style.color = "black";
    colorTextButtonChange.style.backgroundColor = 'red';
})

// Bài 4
const myDiv = document.getElementById('rectangle');
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function() {
   
    if (myDiv.style.display === 'none') {
        myDiv.style.display = 'flex';
    } else {
        myDiv.style.display = 'none';
    }
});
