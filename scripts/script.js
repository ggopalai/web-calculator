const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = function(op, a, b) {
    switch (op) {
        case '+' : return add(a, b);
        case '-' : return subtract(a, b);
        case '*' : return multiply(a, b);
        case '/' : return divide(a, b);
    }
}

displayField = document.querySelector('#display');
clearBtn = document.querySelector('#op-clear');
opButtons = document.querySelectorAll('.operations button');
equalBtn = document.querySelector('#op-equals')
displayField.textContent = 0;
let exp = '';
let num1 = '';
let num2 = '';
let op = '';
let f = false;

numButtons = document.querySelectorAll('.numbers button');
numButtons.forEach(numButton => {
    numButton.addEventListener('click', (e) => {
        exp += numButton.textContent;
        if (!f) {
            num1 += numButton.textContent;
        } else {
            num2 += numButton.textContent;
        }
        displayField.textContent = exp;
    });
});

clearBtn.addEventListener('click', (e) => {
    displayField.textContent = 0;
    console.log(num1, num2, exp)
    exp = '';
    num1 = '';
    num2 = '';
    f = false;
})

opButtons.forEach(opbtn => {
    opbtn.addEventListener('click', (e) => {
        console.log(num1)
        f = true;
        op = opbtn.textContent;
        exp += opbtn.textContent;
        displayField.textContent = exp;
    })
})

equalBtn.addEventListener('click', (e) => {
    console.log('equal button pressed',num1, num2);
    let a = parseInt(num1);
    let b = parseInt(num2);
    displayField.textContent = operate(op, a, b);
    exp = '';
    num1 = '';
    num2 = '';
    f = false;
})


