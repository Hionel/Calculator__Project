// const numberInput = document.querySelectorAll("[data-number]");
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
    // const operandInput = document.querySelectorAll("[data-operand]");
// }
let firstInputNumber ;
let secondInputNumber ;
let operandInput;


function Input(id){
    let number = document.getElementById(id);
    console.log(number.innerText);
    let number_array = ['0','1','2','3','4','5','6','7','8','9',"."];
    let inputDisplay = document.getElementsByClassName("inputs-results__screen")[0];
    if ( number_array.includes(number.innerText) ){
        console.log(number.innerText);
        inputDisplay.value += number.innerText;
    } else if (number.innerText == "+" ){
        // if(inputDisplay.value == "+"){
        //     activeOperand(id);
        // } else {
        //     NoActiveOperand(id); 
        // } 
        // Tried to make the operand button keep it's acive state background on till a second number was proccesed
        varaiableProccesing(inputDisplay);
        operandInput = "+";
        
    }
    else if (number.innerText == "-" ){
        varaiableProccesing(inputDisplay);
        operandInput = "-";

    }
    else if (number.innerText == "/" ){
        varaiableProccesing(inputDisplay);
        operandInput = "/";

    }
    else if (number.innerText == "x" ){
        varaiableProccesing(inputDisplay);
        operandInput = "x";

    }
    else if (number.innerText == "=" ){
        varaiableProccesing(inputDisplay);
        if (operandInput == "+"){
            inputDisplay.value = sum(firstInputNumber,secondInputNumber);
        } 
        else if (operandInput == "-"){
            inputDisplay.value = substract(firstInputNumber,secondInputNumber);

        }
        else if (operandInput == "/"){
            inputDisplay.value = divide(firstInputNumber,secondInputNumber);

        }
        else if (operandInput == "x"){
            inputDisplay.value = multiply(firstInputNumber,secondInputNumber);

        }
        else if (operandInput == "RESET"){
            inputDisplay.value = resetButton(firstInputNumber, secondInputNumber);

        }

    }
    console.log (firstInputNumber);
    console.log (secondInputNumber);

}
// function activeOperand(id){
//     let activeOperand = document.getElementById(id);
//     activeOperand.style.background = "hsl(0, 0%, 100%)";
// }
// function NoActiveOperand(id){
//     let activeOperand = document.getElementById(id);
//     activeOperand.style.background = "hsl(30, 25%, 89%)";
// }
//  Functions for different operand background states 

function varaiableProccesing (inputDisplay){
    if ( inputDisplay.value != null ){

        if( firstInputNumber == null ){
            firstInputNumber = inputDisplay.value;
        } else {
            secondInputNumber = inputDisplay.value;
        } 
       inputDisplay.value = "";
    }
}

function sum(firstNumber , secondNumber){
    let sum = parseInt(firstNumber) + parseInt(secondNumber) ; 
    return sum ; 
    // return firstNumber + secondNumber ; Do it like this ! 
}

function substract(firstNumber , secondNumber){
    let substract = parseInt(firstNumber) - parseInt(secondNumber) ; 
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

function resetButton() {


}