function palindromeIntegers(array){
    
    let arrayLength = array.length;

    for(let n = 0; n < arrayLength; n++){
        
        let numberAsString = array[n].toString();
        let reverseString = numberAsString.split('').reverse().join('');

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
