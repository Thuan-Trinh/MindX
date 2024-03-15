const square = document.getElementById("square");
square.style.background = 'blue';
square.style.width = '100px';
square.style.height = '100px';
square.style.marginBottom = '24px';
let isChange = false;
const clickSpace = document.querySelector('.tooltip');
const toolTip = document.querySelector('.tooltipText');



function changeColor() {
    isChange = !isChange;
    if (isChange) {
        square.style.background = 'red';
    } else { 
        square.style.background = 'purple';
     }
}

// bài 2
clickSpace.addEventListener('click', ()=>{
    toolTip.style.visibility = 'invisible';
})

