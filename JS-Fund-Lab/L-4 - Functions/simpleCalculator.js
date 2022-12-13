function simpleCalculator(firstNumber , secondNumber , operatorName){

    let resultParameter = 0;
    
    let multiply = (firstNumber , secondNumber) => firstNumber * secondNumber;
    let divides = (firstNumber , secondNumber) => firstNumber / secondNumber;
    let subtract = (firstNumber , secondNumber) => firstNumber - secondNumber;
    let add =  (firstNumber , secondNumber) => firstNumber + secondNumber;
    
    switch(operatorName){
        case 'multiply': resultParameter = multiply(firstNumber , secondNumber); break;
        case 'divide': resultParameter = divides(firstNumber , secondNumber); break;         
        case 'subtract': resultParameter = subtract(firstNumber , secondNumber); break;
        case 'add': resultParameter = add(firstNumber , secondNumber); break;
    }   

    return resultParameter
}

let result = simpleCalculator(40,
8,
'divide'
)

console.log(result)