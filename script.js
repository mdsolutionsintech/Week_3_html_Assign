let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero");
        return "Error: Division by zero";
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = "Result: " + result;
    resultDiv.classList.remove('hidden');
}

document.getElementById('addButton').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = add(num1, num2);
    displayResult(result);
});

document.getElementById('subtractButton').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = subtract(num1, num2);
    displayResult(result);
});

document.getElementById('multiplyButton').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = multiply(num1, num2);
    displayResult(result);
});

document.getElementById('divideButton').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = divide(num1, num2);
    displayResult(result);
});

console.log("String: " + myString);               
console.log("Number: " + myNumber);              
console.log("Boolean: " + myBoolean);           
