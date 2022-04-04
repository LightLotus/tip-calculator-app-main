const billInput = document.querySelector("#bill-input");
const five = document.querySelector(".five");
const ten = document.querySelector(".ten");
const fifteen = document.querySelector(".fifteen");
const twentyFive = document.querySelector(".twentyFive");
const fifty = document.querySelector(".fifty");
const custom = document.querySelector(".custom-percent");
const numPeople = document.querySelector("#number-of-people-input");
const resetBtn = document.querySelector(".reset-btn");
const totalDisplay = document.querySelector("#total-display");
const tipDisplay = document.querySelector("#tip-amt-display");

five.value = .05
ten.value = .10
fifteen.value = .15
twentyFive.value = .25
fifty.value = .50
custom.innerText = custom.value
numPeople.innerText = numPeople.value
billInput.innerText = billInput.value
totalDisplay.innerText = "$0.00"
tipDisplay.innerText = "$0.00"

let calculateTip = 0;
let calculateTotal = 0;

const calculateTipAmt = percent => {
        calculateTip = (parseFloat(billInput.value) * percent) / numPeople.value;
        calculateTotal = (billInput.value / numPeople.value) + calculateTip;
        tipDisplay.innerText = `$${calculateTip.toFixed(2)}`;
        totalDisplay.innerText = `$${calculateTotal.toFixed(2)}`;
        resetBtn.classList.add("reset-btn-active")
}

five.addEventListener('click', () => {
    calculateTipAmt(five.value)
})

ten.addEventListener('click', () => {
    calculateTipAmt(ten.value)
})

fifteen.addEventListener('click', () => {
    calculateTipAmt(fifteen.value)
})

twentyFive.addEventListener('click', () => {
    calculateTipAmt(twentyFive.value)
})

fifty.addEventListener('click', () => {
    calculateTipAmt(fifty.value)
})

custom.addEventListener('input', () => {
    let customAmt = parseInt(custom.value) / 100;
    calculateTipAmt(customAmt)
})

resetBtn.addEventListener('click', () => {
    calculateTotal = 0;
    calculateTip = 0;
    totalDisplay.innerText = "$0.00"
    tipDisplay.innerText = "$0.00"
    billInput.innerText = ""
    numPeople.innerText = ""
    custom.value = ""
    custom.innerText = ""
    billInput.value = ""
    numPeople.value = ""
    resetBtn.classList.remove("reset-btn-active")
})