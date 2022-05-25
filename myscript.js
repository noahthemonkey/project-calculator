const calculatorContainer = document.querySelector('#calculator-container')
const displayContent = document.getElementById('#display')

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
let setOperator = '';
let stored2;
display.textContent = displayNum;

// Selected number

function selectorFunction() {
    let selected = parseInt(this.id)
    if (setOperator === ''){
        number += selected
        displayNum = number
        console.log(number)
        selected = ''
    }

    else {
        number2 += selected
        displayNum = number2
        console.log(number2)
        selected =''
    }
    
    display.textContent = displayNum
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
    if (this.textContent !== "=") { // If the operator is not equals
        setOperator = this.textContent;
        console.log(displayNum); // Print the first number
        console.log(setOperator); // Print the operator
        if(number2 !== '') { // See if number2 has value
            if(setOperator == '+'){
                display.textContent  = (parseInt(number) + parseInt(number2))
                console.log(parseInt(number) + parseInt(number2));
                number = display.textContent
                number2 = ''
                selected = ''
            }
            if(setOperator == '-'){
                display.textContent  = (parseInt(number) + parseInt(number2))
                console.log(parseInt(number) + parseInt(number2));
                number = display.textContent
                number2 = ''
                selected = ''
            }
            if(setOperator == '*'){
                display.textContent  = (parseInt(number) + parseInt(number2))
                console.log(parseInt(number) + parseInt(number2));
                number = display.textContent
                number2 = ''
                selected = ''
            }
            if(setOperator == '/'){
                display.textContent  = (parseInt(number) + parseInt(number2))
                console.log(parseInt(number) + parseInt(number2));
                number = display.textContent
                number2 = ''
                selected = ''
            }
    }
}
    else { // If equals button clicked
        switch (setOperator) { // Calculate and print output
            case '+':
                display.textContent  = (parseInt(number) + parseInt(number2))
                console.log(parseInt(number) + parseInt(number2));
                number = display.textContent
                selected = ''
                break;

            case "-":
                display.textContent = (parseInt(number) - parseInt(number2))
                console.log(parseInt(number) - parseInt(number2));
                number = display.textContent

                selected = ''
                break;

            case "*":
                display.textContent  = (parseInt(number) * parseInt(number2))
                console.log(parseInt(number) * parseInt(number2));
                number = display.textContent

                selected = ''
                break;
            

            case "/":
                display.textContent  = (parseInt(number) / parseInt(number2))
                console.log(parseInt(number) / parseInt(number2));
                number = display.textContent

                selected = ''
                break;

            default:
                break;
        }
    }
}
const clearCalculator = document.createElement('button')
clearCalculator.textContent = 'CLEAR'
clearCalculator.addEventListener('click', clearFunction)
calculatorContainer.appendChild(clearCalculator)

function clearFunction(){
    number = '';
    number2 = '';
    displayNum = '0'
    setOperator = '';
    display.textContent = '0'
}









// switch (setOperator) { // Calculate and print output
//     case '+':
//         display.textContent  = (parseInt(number) + parseInt(number2))
//         console.log(parseInt(number) + parseInt(number2));
//         number = display.textContent
//         number2 = ''
//         break;

//     case "-":
//         display.textContent = (parseInt(number) - parseInt(number2))
//         console.log(parseInt(number) - parseInt(number2));
//         number = display.textContent
//         number2 = ''
//         break;

//     case "*":
//         display.textContent  = (parseInt(number) * parseInt(number2))
//         console.log(parseInt(number) * parseInt(number2));
//         number = display.textContent
//         number2 = ''
//         break;
    

//     case "/":
//         display.textContent  = (parseInt(number) / parseInt(number2))
//         console.log(parseInt(number) / parseInt(number2));
//         number = display.textContent
//         number2 = ''
//         break;

// }