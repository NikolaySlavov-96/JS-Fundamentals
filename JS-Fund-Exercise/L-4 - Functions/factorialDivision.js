function factorialDivision(first , second){
    
    let inputNumber = factorialNumbers(first)
    let secondNumber = factorialNumbers(second)
    function factorialNumbers(number){
        
        let integerNumber = number;

        for(let n = 1; n <= number - 1; n++){
            integerNumber = integerNumber * n;
        }

        return integerNumber;
    }    
    return ((inputNumber / secondNumber).toFixed(2))
}

console.log(factorialDivision(5,2))