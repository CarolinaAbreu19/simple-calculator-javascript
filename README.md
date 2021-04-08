# Calculator
A simple calculator made with HTML, CSS and JavaScript.

![Alt text](./images/calculator.png?raw=true "Title")

After downloading, just run the `calculator.html` file in the same directory to view the project.

## But how do you make a calculator?

Let's start with the HTML structure. An easy way to create your calculator is if you see it as a table. Look at the image below:

![Alt text](./images/a-calculator.png?raw=true "Title")

Can you see? It's a table! Each button occupies a specific row and column, and the calculator's display (the little screen where the numbers you type appear) is a cell that occupies 4 columns.

The structure of the HTML will be a table. It will have 5 rows, and in each row we will place 4 "button" type inputs (except the display, a "text" type input that will occupy the entire row). Let's see how the code and HTML are doing:

```
<table>
        <!-- A little example -->

        <tr>
            <td>
                <input type="text">
            </td>
        </tr>

        <tr>
            <td><input type="button" value=""></td>
            <td><input type="button" value=""></td>
            <td><input type="button" value=""></td>
            <td><input type="button" value=""></td>
        </tr>

        <!-- ... -->
```

![Alt text](./images/html-table.png?raw=true "Title")

Hmmm that doesn't look like a calculator, does it? Well, but this is easy to solve! Just configure the display to occupy the 4 columns using the "colspan" attribute, and identify the values for each button. For the display you can also add the "disabled" attribute so that no one can type in the input:

```
<table>
        <!-- A little example -->

        <tr>
            <td colspan="4">
                <input type="text" disabled>
            </td>
        </tr>

        <tr>
            <td><input type="button" value="1"></td>
            <td><input type="button" value="2"></td>
            <td><input type="button" value="3"></td>
            <td><input type="button" value="+"></td>
        </tr>

        <!-- ... -->
```

![Alt text](./images/html-buttons.png?raw=true "Title")

## Calculator functions

To add the functions of the calculator, we'll use JavaScript. You may be thinking of making a function for each operation, or doing a complex function that will analyze the chosen button ... But there is an easier way! You can implement the function you want, of course, but at this point we're going to try a simpler approach.

Our calculator will have only 4 functions:

* Insert numbers on the display
* Insert operators on the display
* Perform the operation
* Clear the display

```
function insertNumber(num) {}
function insertOperator(num) {}
function performOperation() {}
function clearDisplay() {}

```

We'll need some variables too:

* Receive the chosen values
* Show the answer on the display
* Check whether an answer is being displayed or not

```
var values, answer;
var checkAnswer = false;

```

For each button typed, we will add this value to the display, regardless of whether it is a numeric value or not. If the chosen button was "clear", we will clear the display:

```
function insertNumber(num) {
    values = document.calculator.display.value += num;
}

function insertOperator(num) {
    values = document.calculator.display.value += num;
}

function performOperation() {}

function clearDisplay() {
    document.calculator.display.value = "";
}

```

To know the answer, just use the `eval()` function on the variable that is receiving the values entered and show this value in the display. When showing the answer on the display, the variable `checkAnswer` becomes true:

```
function performOperation() {
    answer = eval(values);
    document.calculator.display.value = answer;
    flagAnswer = true;
}
```
And after that, just modify this variable in the other functions. If you enter numbers, we will delete the answer and insert new numbers on the display. If you enter an operator, we will continue to work with the answer. In both cases, the variable `checkAnswer` becomes false:

```
function insertNumber(num) {
    if (checkAnswer == true) {
            clearDisplay();
            checkAnswer = false;
        }

    values = document.calculator.display.value += num;
}

function insertOperator(num) {
    if (checkAnswer == true) {
            checkAnswer = false;
        }

    values = document.calculator.display.value += num;
}
```
And with that, you will have the functions of your calculator. You can think of more functions to handle errors (for example, how to prevent the user from dividing by zero?). From that point on, just add your CSS and leave your calculator the way you like it most!


## Contact

Carolina Abreu - [Linkedin](https://www.linkedin.com/in/ana-carolina-silva-abreu-80325a195/) - anacarolinaks19@gmail.com
