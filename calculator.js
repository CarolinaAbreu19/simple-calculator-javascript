var values, answer;
var checkAnswer = false;

function insertNumber(num) {
    if (checkAnswer == true) {
        clearDisplay();
        checkAnswer = false;
    }

    values = document.calculator.screen.value += num;
}

function insertOperator(num) {
    if (checkAnswer == true) {
        checkAnswer = false;
    }
    values = document.calculator.screen.value += num;
}

function performOperation() {
    answer = eval(values);
    document.calculator.screen.value = answer;
    checkAnswer = true;
}

function clearDisplay() {
    document.calculator.screen.value = "";
}