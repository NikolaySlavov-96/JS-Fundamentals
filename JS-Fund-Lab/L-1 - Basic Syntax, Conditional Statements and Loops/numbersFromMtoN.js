function numbersFromMtoN(first , second){
    
    let firstNumber = first;
    let secondNumber = second;

    for(let n = firstNumber; n >= secondNumber; n--){
        console.log(n);
    }
}

numbersFromMtoN(6,2)