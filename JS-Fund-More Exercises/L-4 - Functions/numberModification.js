function numberModification(number){

    let stringOfNumber = number.toString();
    let result = [];
    let temporary = 0;

    for(let n = 0; n < stringOfNumber.length; n++){

        temporary += Number(stringOfNumber[n]);
        result.push(stringOfNumber[n]);

        if(n === stringOfNumber.length - 1){
            if(temporary / stringOfNumber.length >= 5){
                return result.join('');
            } else {
                stringOfNumber += '9'
            }
        }
    }
}

console.log(numberModification(101))
// console.log(numberModification(5835))