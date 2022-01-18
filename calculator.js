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
let operationChoose = false;

clearButton.addEventListener("click", () => {
    display.value = 0;
    entry.firstNum = 0;
    entry.secondNum = 0;
    entry.operation = null;
    entry.result = 0;
    firstNumChoose = false;
    secondNumChoose = false;
    operationChoose = false;
});

answerButton.addEventListener("click", () => {
    if(!secondNumChoose) {
        display.value = "Syntax error";
    }
    else {
        entry.firstNum = parseInt(entry.firstNum);
        entry.secondNum = parseInt(entry.secondNum);
        switch(entry.operation) {
            case "+":
                entry.result = entry.firstNum + entry.secondNum;
                break;
            case "-":
                entry.result = entry.firstNum - entry.secondNum;
                break;
            case "*":
                entry.result = entry.firstNum * entry.secondNum;
                break;
            case "/":
                entry.result = entry.firstNum / entry.secondNum;
                break;
            default:
                entry.result = "Error";
        }
        display.value = entry.result;
    }
});

operatorButtons.forEach(operator => {
    operator.addEventListener("click", (event) => {
        entry.operation = event.target.value;
        operationChoose = true;
    })
});

numButtons.forEach(button => {

    button.addEventListener("click", (event) => {

        if(!firstNumChoose || !entry.operation) {
            firstNumChoose = true;
            entry.firstNum += event.target.value;
            
            if(display.value === "0") {
                display.value = event.target.value;
            } else {
                display.value += event.target.value;
            }
        }

        if(firstNumChoose && entry.operation) {
            secondNumChoose = true;
            if(operationChoose) {
                display.value = event.target.value;
                operationChoose = false;
            } else {
                display.value += event.target.value;
            }
            entry.secondNum += event.target.value;
        }

    })

})