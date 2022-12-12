function evenAndOddSubtraction(number){

    let allLoop = number.length;
    let sumOdd = 0;
    let sumEven = 0;

    for(let n = 0; n < allLoop; n++){
        if(number[n] % 2 === 0){
            sumEven += Number(number[n]);
        } else if(number[n] % 2 !== 0){
            sumOdd += Number(number[n]);
        }
    }
    console.log(sumEven - sumOdd)
}

evenAndOddSubtraction([1,2,3,4,5,6])