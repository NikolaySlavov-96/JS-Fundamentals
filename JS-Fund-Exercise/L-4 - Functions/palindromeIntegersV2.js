function palindromeIntegers(array){
    
    let arrayLength = array.length;

    for(let n = 0; n < arrayLength; n++){
        
        let numberAsString = array[n].toString();
        let reverseString = '';

        for(let q = numberAsString.length - 1; q >= 0; q--){
            reverseString += numberAsString[q];
        }
        if(numberAsString === reverseString){
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

palindromeIntegers([123,323,421,121])
// palindromeIntegers([32,2,232,1010])
// palindromeIntegers([32,2,232,10001])
