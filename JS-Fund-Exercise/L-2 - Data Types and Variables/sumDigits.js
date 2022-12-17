function sumDigits(firstNumber){

    let endNumber = firstNumber.toString()
    let counter = 0;

    for(let q = 0; q < endNumber.length; q++){
        counter += Number(endNumber[q]);
    }
    console.log(counter)
}

sumDigits(245678)