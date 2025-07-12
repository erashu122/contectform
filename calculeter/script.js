let display = document.getElementById('display');
let currentNum = '';
let prevNum = '';
let result = null;
let currentOperator = null;

function appendNumber(num) {
	currentNum += num;
	display.value = currentNum;
}

function operate(operator) {
	if (currentNum === '') return;
	if (prevNum!== '') calculate();
	prevNum = currentNum;
	currentNum = '';
	currentOperator = operator;
	display.value = '';
}

function calculate() {
	let num1 = Number(prevNum);
	let num2 = Number(currentNum);
	let calculation;

	switch (currentOperator) {
		case '+':
			calculation = num1 + num2;
			break;
		case '-':
			calculation = num1 - num2;
			break;
		case '*':
			calculation = num1 * num2;
			break;
		case '/':
			if (num2 === 0) {
				alert('Cannot divide by zero');
				return;
			}
			calculation = num1 / num2;
			break;
	}

	result = calculation;
	display.value = calculation;
	currentNum = '';
	prevNum = '';
	currentOperator = null;
}

function clearDisplay() {
	currentNum = '';
	prevNum = '';
	result = null;
	currentOperator = null;
	display.value = '';
}

function toThePower() {
	if (currentNum === '') return;
	let num = Math.pow(Number(currentNum), 2);
	currentNum = num.toString();
	display.value = num;
}

function squareRoot() {
	if (currentNum === '') return;
	let num = Math.sqrt(Number(currentNum));
	currentNum = num.toString();
	display.value = num;
}

function log() {
	if (currentNum === '') return;
	let num = Math.log10(Number(currentNum));
	currentNum = num.toString();
	display.value = num;
}

function factorial() {
	if (currentNum === '') return;
	let num = factorialRecursive(Number(currentNum));
	currentNum = num.toString();
	display.value = num;
}

function factorialRecursive(n) {
	if (n === 0 || n === 1) return 1;
	return n * factorialRecursive(n - 1);
}