const calculatorContainer = document.querySelector('#calculator-container')

// Number buttons 
let numbers = 10;
for (i = 0; i < numbers; i++) {
    const numbersContainer = document.getElementById('numbers-container');
    const calcNumber = document.createElement('button');
    calcNumber.setAttribute('id', `number${i}`);
    calcNumber.textContent = `${i}`;
    calcNumber.addEventListener('click', selectorFunction);
    numbersContainer.appendChild(calcNumber);
}
let selectedNum = '';
// Selected number
function selectorFunction(selected) {
    selected = this.textContent
    selectedNum += selected
    console.log(selectedNum)
}


// operator function
const operationsContainer = document.getElementById('operations-container');

const addButton = document.getElementById('add-button')
    addButton.addEventListener('click', operator)
const subButton = document.getElementById('sub-button')
    subButton.addEventListener('click', operator)
const multiButton = document.getElementById('multi-button')
    multiButton.addEventListener('click', operator)
const diviButton = document.getElementById('divi-button')
    diviButton.addEventListener('click', operator)
const equalsButton = document.getElementById('equals-button')
    equalsButton.addEventListener('click', operator)

function operator(num1, num2) {
    opSelected = this.textContent
    result = num1 + opSelected + num2
    console.log(opSelected)
}
