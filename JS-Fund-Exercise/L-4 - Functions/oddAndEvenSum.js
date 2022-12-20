function oddAndEvenSum(number){
    let array = number.toString();
    let arrayLength = array.length;

    let oddNumbers = [];
    let evenNumber = [];

    for(let n = 0; n < arrayLength; n++){
        if(array[n] % 2 === 0){
            if(array[n] === 0){
                continue;
            } else {
                evenNumber.push(array[n]); 
            }
        } else {
            oddNumbers.push(array[n]);
        }
    }

    let givenNumberOdd = sumNumbers(oddNumbers);
    let givenNumberEven = sumNumbers(evenNumber);

    function sumNumbers(array){

        let lengthArray = array.length;
        let sumOfNumber = 0;

        for(let n = 0; n < lengthArray; n++){
            sumOfNumber += Number(array[n]);
        }

        return sumOfNumber;
    }

    return (`Odd sum = ${givenNumberOdd}, Even sum = ${givenNumberEven}`)
}

let finlSum = oddAndEvenSum(1000435)

console.log(finlSum)
