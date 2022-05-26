const calculatorContainer = document.querySelector('#calculator-container')
const displayCalculation = document.querySelector('#display')





// Number buttons 
let numbers = 10;
const numbersContainer = document.getElementById('numbers-container');

for (i = 0; i < numbers; i++) {
    const calcNumber = document.createElement('button');
    calcNumber.setAttribute('id', `${i}`);
    calcNumber.textContent = `${i}`;
    calcNumber.addEventListener('click', selectorFunction);
    numbersContainer.appendChild(calcNumber);
}




let number = '';
let number2 = '';
let displayNum = '0'
let displayOp = '';
let setOperator = '';


display.textContent = displayNum;

// Selected number

function selectorFunction() {
    let selected = parseFloat(this.id)
    if (setOperator === '') {
        number += selected
        console.log(number)
        selected = ''
       
    } else {
        number2 += selected
        console.log(number2)
        selected = ''
    }
    display.textContent = `${number} ${setOperator} ${number2}`

}



// operator function
const operationsContainer = document.getElementById('operations-container');

const addButton = document.querySelector('.add-button')
addButton.addEventListener('click', operator)
const subButton = document.querySelector('.sub-button')
subButton.addEventListener('click', operator)
const multiButton = document.querySelector('.multi-button')
multiButton.addEventListener('click', operator)
const diviButton = document.querySelector('.divi-button')
diviButton.addEventListener('click', operator)
const equalsButton = document.querySelector('.equals-button')
equalsButton.addEventListener('click', operator)


function operator() {
    if (setOperator !== '' && setOperator !== '=') { // if not empty do either of these and NOT equals 
        if (this.textContent !== "=") { // if not equals do this 
            console.log(displayNum); // Print the first number
            console.log(setOperator); // Print the operator
            if (number2 !== '') { // if number2 is empty do this
                displayOp = setOperator;

                if (displayOp == '+') {
                    display.textContent = (parseFloat(number) + parseFloat(number2))
                    console.log(parseFloat(number) + parseFloat(number2));
                    number = display.textContent
                    number2 = ''
                    selected = ''
                    setOperator = this.textContent;
                }
                if (displayOp == '-') {
                    display.textContent = (parseFloat(number) - parseFloat(number2))
                    console.log(parseFloat(number) - parseFloat(number2));
                    number = display.textContent
                    number2 = ''
                    selected = ''
                    setOperator = this.textContent;
                }
                if (displayOp == '*') {
                    display.textContent = (parseFloat(number) * parseFloat(number2))
                    console.log(parseFloat(number) * parseFloat(number2));
                    number = display.textContent
                    number2 = ''
                    selected = ''
                    setOperator = this.textContent;
                }
                if (displayOp == '/') {
                    display.textContent = (parseFloat(number) / parseFloat(number2))
                    console.log(parseFloat(number) / parseFloat(number2));
                    number = display.textContent
                    number2 = ''
                    selected = ''
                    setOperator = this.textContent;
                }
                
            }
        } else { // If equals button clicked
            
            switch (setOperator) { // Calculate and print output
                case '+':
                    display.textContent = (parseFloat(number) + parseFloat(number2))
                    console.log(parseFloat(number) + parseFloat(number2));
                    number = display.textContent
                    selected = ''
                    setOperator = this.textContent;
                    number2 = ''
                    break;

                case "-":
                    display.textContent = (parseFloat(number) - parseFloat(number2))
                    console.log(parseFloat(number) - parseFloat(number2));
                    number = display.textContent

                    selected = ''
                    setOperator = this.textContent;
                    number2 = ''
                    break;

                case "*":
                    display.textContent = (parseFloat(number) * parseFloat(number2))
                    console.log(parseFloat(number) * parseFloat(number2));
                    number = display.textContent
                    
                    selected = ''
                    setOperator = this.textContent;
                    number2 = ''
                    break;


                case "/":
                    display.textContent = (parseFloat(number) / parseFloat(number2))

                    console.log(parseFloat(number) / parseFloat(number2));
                    number = display.textContent
                    selected = ''
                    setOperator = this.textContent;
                    
                    
                    if (parseFloat(number2) == 0) {
                        display.textContent = "Hey! don\'t be goofy!"
                        number = '';
                        number2 = '';
                        displayNum = '0'
                        displayOp = '';
                        setOperator = '';
                        break;
                    }
                    number2 = ''
                    break;

                default:
                    break;
                    
            }
        }
    } else {
        console.log('hello')
        
        setOperator = this.textContent;
        if (setOperator == '=') {
            setOperator = ''
            display.textContent = `${number} ${number2}`
        }
        display.textContent = `${number} ${setOperator} ${number2}`
        number2 = ''
    }
}
const clearCalculator = document.createElement('button')
clearCalculator.textContent = 'CLEAR'
clearCalculator.addEventListener('click', clearFunction)
calculatorContainer.appendChild(clearCalculator)

function clearFunction() {
    number = '';
    number2 = '';
    displayNum = '0'
    setOperator = '';
    display.textContent = displayNum
}
