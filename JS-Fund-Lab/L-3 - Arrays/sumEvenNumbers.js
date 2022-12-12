function sumEvenNumbers(sum){

    let counter = sum.length;

    let sumElement = 0;

    for(let n = 0; n < counter; n++){
        if(sum[n] % 2 === 0){
            sumElement += Number(sum[n]);
        }
    }
    console.log(sumElement)
}

sumEvenNumbers(['1','2','3','4','5','6'])