const leftPan = document.getElementById("leftPan");
const rightPan = document.getElementById("rightPan");
const uniqueWord = document.getElementById("uniqueWord");

let leftWeight = 0;
let rightWeight = 0;

const weights = {
    apple: 1,
    gold: 5,
    diamond: 10
};

function addItem(type) {
    const item = document.createElement("div");
    item.className = "item";
    item.textContent = type === "apple" ? "🍎" : type === "gold" ? "🪙" : "💎";
    const weight = weights[type];

    if (leftWeight <= rightWeight) {
        leftPan.appendChild(item);
        leftWeight += weight;
    } else {
        rightPan.appendChild(item);
        rightWeight += weight;
    }

    updateBalance();
}

function updateBalance() {
    const arm = document.querySelector(".arm");
    const tilt = (rightWeight - leftWeight) * 2;
    arm.style.transform = `rotate(${tilt}deg)`;

    if (leftWeight > rightWeight) {
        uniqueWord.style.color = "green";
    } else if (rightWeight > leftWeight) {
        uniqueWord.style.color = "red";
    } else {
        uniqueWord.style.color = "gold";
    }
}
