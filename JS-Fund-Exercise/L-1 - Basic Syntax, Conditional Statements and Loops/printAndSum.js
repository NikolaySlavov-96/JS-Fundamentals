function printAndSum(firstNumber, secondNumber){

    let allNumbersString = "";
    let sumAllNumber = 0;

    for(let n = firstNumber; n <= secondNumber; n++){
        allNumbersString += `${n} `
        sumAllNumber += n;
    }
    console.log(allNumbersString);
    console.log(`Sum: ${sumAllNumber}`);
}

printAndSum(5,10)