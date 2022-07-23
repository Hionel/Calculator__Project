// const numberInput = document.querySelectorAll("[data-number]");
// const operandInput = document.querySelectorAll("[data-operand]");
// const equalButton = document.querySelector("[data-equal]");
// const deleteButton = document.querySelector("[data-delete]");
// const resetButton = document.querySelector("[data-reset]");
// //  console.log(numberInput);
// //  console.log(operandInput);
// //  console.log(equalButton.innerText);
// //  console.log(deleteButton.innerText);
// //  console.log(resetButton.innerText);

// for ( let i=0 ; i<11 ; i++){
//     console.log(numberInput[i].innerText);
// }
var firstInputNumber = 0;
var secondInputNumber = 0;

function Input(id){
    let number = document.getElementById(id);
    let number_array = ['0','1','2','3','4','5','6','7','8','9'];
    let inputDisplay = document.getElementsByClassName("inputs-results__screen")[0];
    if ( number_array.includes(number.innerText) ){
        console.log(number.innerText);
        inputDisplay.value += number.innerText;
    } else if (number.innerText == "+" ){
        varaiableProccesing(inputDisplay,firstInputNumber,secondInputNumber)
    }
    else if (number.innerText == "-" ){
        varaiableProccesing(inputDisplay,firstInputNumber,secondInputNumber)
    }
    else if (number.innerText == "/" ){
        varaiableProccesing(inputDisplay,firstInputNumber,secondInputNumber)
    }
    else if (number.innerText == "*" ){
        varaiableProccesing(inputDisplay,firstInputNumber,secondInputNumber)
    }
    else if (number.innerText == "=" ){
        varaiableProccesing(inputDisplay,firstInputNumber,secondInputNumber)
    }
    console.log (firstInputNumber);
    console.log (secondInputNumber);

}

function varaiableProccesing (inputDisplay,firstInputNumber,secondInputNumber){
    if ( inputDisplay.value != null ){

        if( firstInputNumber == null ){
            firstInputNumber = inputDisplay.value;
        } else {
            secondInputNumber = inputDisplay.value;
        } 
       
    }
}

function sum(firstNumber , secondNumber){
    let sum = firstNumber + secondNumber ; 
    return sum ; 
    // return firstNumber + secondNumber ; Do it like this ! 
}

function substract(firstNumber , secondNumber){
    let substract = firstNumber - secondNumber ; 
    return substract ; 
    // return firstNumber - secondNumber ; Do it like this ! 
}

function divide(firstNumber , secondNumber){
    let divide = firstNumber / secondNumber ; 
    return divide ; 
    // return firstNumber / secondNumber ; Do it like this ! 
}

function multiply(firstNumber , secondNumber){
    let multiply = firstNumber * secondNumber ; 
    return multiply ; 
    // return firstNumber * secondNumber ; Do it like this ! 
}