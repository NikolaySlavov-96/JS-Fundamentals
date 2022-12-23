function numbers(numbers){

    let editNumber = numbers.split(` `)
    let lengthNumber = editNumber.length;

    let numbersCounter = 0;
    
    
    
    for(let n = 0; n < lengthNumber; n++){
        numbersCounter += Number(editNumber[n]);
    }
    
    let averageSum = numbersCounter / lengthNumber;
    let resultArray = [];
    
    for(let q = 0; q < lengthNumber; q++){
        if(averageSum < editNumber[q]){
            resultArray.push(editNumber[q])
        }
    }

    if(resultArray == 0){
        console.log(`No`)
    }

    if(resultArray.length > 5){
        let sort = resultArray.sort((a, b) => b - a);
        let splice = sort.splice(0, 5)
        console.log(splice.join(' '))
    } else {
        let sort = resultArray.sort((a, b) => b - a);
        console.log(sort.join(' '))
    }
}

numbers(`10 20 30 40 50`)
// numbers(`-10`)