// const calculatorDisplay = document.querySelector('h1');
// const inputBtns = document.querySelectorAll('button'); // Use querySelectorAll to select all buttons
// const clearBtn = document.getElementById('clear-btn');

// let firstValue=0;
// let operatorValue = '';
// let awaitingNextValue = false;

// function sendNumberValue(number){
//     if(awaitingNextValue){
//         calculatorDisplay.textContent= number;
//         awaitingNextValue= false;
//     }
//     else{
//   const displayValue = calculatorDisplay.textContent;
//   calculatorDisplay.textContent= displayValue === '0' ? number: displayValue + number;
//     }
// }

// function addDecimal(){
//     if(awaitingNextValue) return;
//     if (!calculatorDisplay.textContent.includes('.')){
//         calculatorDisplay.textContent= `${calculatorDisplay.textContent}.`;
//     }
// }

// const calculate = {
//     '/': (firstNumber, secondNumber) => firstNumber/secondNumber,
//     '*': (firstNumber, secondNumber) => firstNumber*secondNumber,
//     '+': (firstNumber, secondNumber) => firstNumber+secondNumber,
//     '-': (firstNumber, secondNumber) => firstNumber-secondNumber,
//     '=': (firstNumber, secondNumber) => firstNumber=secondNumber,
// };

// function useOperator(){
//     const currentValue  = Number(calculatorDisplay.textContent);
//     if(operatorValue && awaitingNextValue) return;
//     if(!firstValue){
//         firstValue= currentValue;
//      }
//     else {
//         console.log(firstValue, operatorValue, currentValue);
//          const calculation = calculate[operatorValue](firstValue,currentValue);
//          console.log('calculation', calculation);
//     }
//     awaitingNextValue = true;
//     operatorValue = operator;
//     }   

// inputBtns.forEach((inputBtn) => {
//     if (inputBtn.classList.length === 0) {
//         inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.textContent)); // Use textContent instead of value
//     } else if (inputBtn.classList.contains('operator')) {
//         inputBtn.addEventListener('click', () => useOperator(inputBtn.textContent)); // Use textContent instead of value
//     } else if (inputBtn.classList.contains('decimal')) {
//         inputBtn.addEventListener('click', () => addDecimal(inputBtn.textContent)); // Use textContent instead of value
//     }
// });
// function resetAll(){
//      firstValue=0;
//     operatorValue = '';
//      awaitingNextValue = false;
//     calculatorDisplay.textContent = '0';
// }
// clearBtn.addEventListener('click', resetAll);


const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number) {
    if (awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }
}

function addDecimal() {
    if (awaitingNextValue) return;
    if (!calculatorDisplay.textContent.includes('.')) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

const calculate = {
    '÷': (firstNumber, secondNumber) => firstNumber / secondNumber,
    '×': (firstNumber, secondNumber) => firstNumber * secondNumber,
    '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
    '-': (firstNumber, secondNumber) => firstNumber - secondNumber,
    '=': (firstNumber, secondNumber) => firstNumber === secondNumber, // Use '===' for comparison
};

function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    if (operatorValue && awaitingNextValue) return;
    if (!firstValue) {
        firstValue = currentValue;
    } else {
        console.log(firstValue, operatorValue, currentValue);
        const calculation = calculate[operatorValue](firstValue, currentValue);
        console.log('calculation', calculation);
        calculatorDisplay.textContent = calculation.toString(); // Update the display with the result
        firstValue = calculation; // Store the result as the new firstValue
    }
    awaitingNextValue = true;
    operatorValue = operator;
}

inputBtns.forEach((inputBtn) => {
    if (inputBtn.classList.length === 0) {
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.textContent));
    } else if (inputBtn.classList.contains('operator')) {
        inputBtn.addEventListener('click', () => useOperator(inputBtn.textContent));
    } else if (inputBtn.classList.contains('decimal')) {
        inputBtn.addEventListener('click', () => addDecimal(inputBtn.textContent));
    }
});

function resetAll() {
    firstValue = 0;
    operatorValue = '';
    awaitingNextValue = false;
    calculatorDisplay.textContent = '0';
}

clearBtn.addEventListener('click', resetAll);
