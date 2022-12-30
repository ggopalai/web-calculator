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
displayField.textContent = 0;
let exp = '';

numButtons = document.querySelectorAll('.numbers button');
numButtons.forEach(numButton => {
    numButton.addEventListener('click', (e) => {
        exp += numButton.textContent;
        displayField.textContent = exp;
    });
});

clearBtn.addEventListener('click', (e) => {
    console.log(displayField.textContent);
    displayField.textContent = 0;
})

opButtons.forEach(opbtn => {
    opbtn.addEventListener('click', (e) => {
        exp += opbtn.textContent;
        displayField.textContent = exp;
    })
})


