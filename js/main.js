let numbers = document.querySelectorAll('.number')
let outputScreen = document.getElementById('output-num');
let clear = document.getElementById('clear');
let operandChange = document.getElementById('plus-minus');
let percent = document.getElementById('percent');
let output = '';
let hasDecimal = false;

let cachedOutput = '';
let cachedType = '';

let equals = document.getElementById('equals');

let operators = document.querySelectorAll('.operator');

operators.forEach(function(operator){
    operator.addEventListener('click',function(){
        makeOperation(output, operator.textContent);
        output = ''; //clears output but doesnt update yet
    })
})

equals.addEventListener('click', function(){
    makeOperation(output, '');
    hasDecimal = false;
    cachedOutput = '';
    cachedType = '';
})

numbers.forEach(function(number){
    number.addEventListener('click',function(){
        addToOutputScreen(number.textContent);
    })
})

percent.addEventListener('click', function(){
    multiplyOutputScreen(1/100)
})

clear.addEventListener('click', function(){
    setOutputScreen(0);
    hasDecimal = false;
    cachedOutput = '';
    cachedType = '';
})

operandChange.addEventListener('click', function(){
    multiplyOutputScreen(-1);
})

function makeOperation(num, type){
    if(cachedOutput == ''){
        cachedOutput = num;
        cachedType = type;
        return;
    }
    cachedOutput = calculate(cachedType, cachedOutput, num);
    setOutputScreen(cachedOutput);
    cachedType = type;
}

function setOutputScreen(num){
    output = num;
    displayOutputScreen();
}

function multiplyOutputScreen(num){
    output *= num;
    displayOutputScreen();
}

function addToOutputScreen(num){ //this sucks balls fix pls
    if(num == '.')
        if(!hasDecimal)
            hasDecimal = true;
        else
            return;
    else if(output == '0')
        output = '';
    output += num;
    displayOutputScreen();
}

function displayOutputScreen(){
    outputScreen.textContent = output;
}

const operations = {
    '+': (num1, num2) => Number(num1) + Number(num2),
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num2 !== 0 ? num1 / num2 : 'Error: Division by zero'
};

function calculate(operation, num1, num2) {
    if (operation in operations) {
        return operations[operation](num1, num2);
    }
    return 'Invalid operation';
}
