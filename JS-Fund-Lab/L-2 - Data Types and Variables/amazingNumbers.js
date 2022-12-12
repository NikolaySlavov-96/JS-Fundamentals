function amazingNumbers(firstNumber){

    let firstString = firstNumber.toString()
    let allSum = 0;
    let isHelm = false;

    for(let n = 0; n < firstString.length; n++){
        let sumNumber = Number(firstString[n]);
        allSum += sumNumber;
    }

    let allSumString = allSum.toString();

    for(let q = 0; q < allSumString.length; q++){
        let digitalSum = allSumString[q];
        if(digitalSum == '9'){
            isHelm = true;
            break;
        }
    }
    console.log(`${firstNumber} Amazing? ${isHelm ? 'True' : 'False'}`)
}

amazingNumbers(999)