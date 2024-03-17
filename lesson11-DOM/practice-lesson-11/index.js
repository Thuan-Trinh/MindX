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

// Mảng chứa thông tin của 6 card
const cards = [
    {
        image: "homework\final-project-team-1\assets\images\item-img-1.png",
        name: "1.3 Chair",
        price: 69.90,
    },

    {
        image: "/assets/images/item-img-2.png",
        name: "Kuyu Desk",
        price: 69.90,
    },

    {
        image: "/assets/images/item-img-3.png",
        name: "Neat Noon",
        price: 69.90,
    },

    {
        image: "/assets/images/item-img-4.png",
        name: "1.3 Chair",
        price: 69.90,
    },

    {
        image: "/assets/images/item-img-5.png",
        name: "Morph",
        price: 69.90,
    },

    {
        image: "/assets/images/item-img-6.png",
        name: "1.3 Chair",
        price: 69.90,
    },
];

// Lấy card mẫu từ HTML
let cardTemplate = document.getElementById("cardTemplate");

// Container chứa các card
let cardContainer = document.getElementById("cardContainer");

// Tạo và thêm 6 cards vào container
for (let i = 0; i < cards.length; i++) {
    // Sao chép card mẫu
    let cardClone = cardTemplate.cloneNode(true);
    
    // Lấy các phần tử con trong card
    let imageElement = cardClone.querySelector(".card-image");
    let nameElement = cardClone.querySelector(".card-name");
    let priceElement = cardClone.querySelector(".card-price");
    
    // Cập nhật thông tin của card sao chép
    imageElement.src = cards[i].image;
    nameElement.textContent = cards[i].name;
    priceElement.textContent = "$" + cards[i].price;
    
    // Hiển thị card sao chép
    cardClone.style.display = "block";
    
    // Thêm card sao chép vào container
    cardContainer.appendChild(cardClone);
}
