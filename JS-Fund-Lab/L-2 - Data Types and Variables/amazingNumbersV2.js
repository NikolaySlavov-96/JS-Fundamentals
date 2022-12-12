function amazingNumbers(firstNumber){

    let firstString = firstNumber.toString()

    let allSum = 0;

    for(let n = 0; n < firstString.length; n++){
        let sumNumber = Number(firstString[n]);
        allSum += sumNumber;
    }
    
    let finalResult = allSum.toString().includes('9') ? 'True' : 'False';

    console.log(`${firstNumber} Amazing? ${finalResult}`)
}

amazingNumbers(999)