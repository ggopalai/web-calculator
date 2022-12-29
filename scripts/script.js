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