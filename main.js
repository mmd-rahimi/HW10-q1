import "./style.css";

const mainBar = document.getElementById("mainBar")
const nameInput = document.getElementById("nameInput")
const phoneNumberInput = document.getElementById("phoneNumberInput")
const addBtn = document.getElementById("addBtn")

addBtn.addEventListener("click", onClick)

function onClick() {
let li = document.createElement('li')
li.appendChild(document.createTextNode(nameInput.value + " " + phoneNumberInput.value));
mainBar.appendChild(li)
}

