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
let showResult = false;

clearButton.addEventListener("click", () => {
    display.value = 0;

    firstNumChoose = false;
    secondNumChoose = false;
    operationChoose = false;
    showResult = false;

    entry.firstNum = 0;
    entry.secondNum = 0;
    entry.operation = null;
    entry.result = 0;
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

        showResult = true;
        firstNumChoose = false;
        secondNumChoose = false;
        operationChoose = false;
        
        entry.firstNum = 0;
        entry.secondNum = 0;
        entry.operation = null;
    }
});

operatorButtons.forEach(operator => {
    operator.addEventListener("click", (event) => {
        if(showResult) {
            entry.firstNum = entry.result;
            firstNumChoose = true;
            entry.result = 0;
            showResult = false;
        }
        entry.operation = event.target.value;
        operationChoose = true;
    });
});

numButtons.forEach(button => {

    button.addEventListener("click", (event) => {

        if(!firstNumChoose || !entry.operation || showResult) {
            
            firstNumChoose = true;
            entry.firstNum += event.target.value;
            
            if(display.value === "0" || showResult) {
                display.value = event.target.value;
            } else {
                display.value += event.target.value;
            }

            showResult = false;
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

    });

});