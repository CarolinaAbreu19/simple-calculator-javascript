const display = document.querySelector(".calculator__display");

const numButtons = document.querySelectorAll(".--number");
const operatorButtons = document.querySelectorAll(".--operator");
const answerButton = document.querySelector(".--answer");
const clearButton = document.querySelector(".--clear");

const entry = {
    firstNum: 0,
    secondNum: 0,
    operation: null,
    result: 0
}

let firstNumChoose = false;
let secondNumChoose = false;

clearButton.addEventListener("click", () => {
    display.value = 0;
    entry.firstNum = 0;
    entry.secondNum = 0;
    entry.operation = null;
    entry.result = 0;
    firstNumChoose = false;
    secondNumChoose = false;
});