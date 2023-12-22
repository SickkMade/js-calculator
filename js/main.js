let numbers = document.querySelectorAll('.number')
let outputScreen = document.getElementById('output-num');
let clear = document.getElementById('clear');
let operandChange = document.getElementById('plus-minus');
let percent = document.getElementById('percent');
let output = '';
let hasDecimal = false;

let num1 = ''; //when doing math 1st number being opepranded against
let equals = document.getElementById('equals');

let multiply = document.getElementById('multiply');

equals.addEventListener('click', function(){

})

numbers.forEach(function(number){
    number.addEventListener('click',function(){
        addToOutputScreen(number.textContent);
    })
})

multiply.addEventListener('click', function(){
    if(num1 == '')
        num1 = output;
    else
        output
    output = ''; //dont update counter
})

percent.addEventListener('click', function(){
    multiplyOutputScreen(1/100)
})

clear.addEventListener('click', function(){
    setOutputScreen(0);
    hasDecimal = false;
})

operandChange.addEventListener('click', function(){
    multiplyOutputScreen(-1);
})

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