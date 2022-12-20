function palindromeIntegers(array){
    
    let lengthArray = array.length;
    
    
    for(let n = 0; n < lengthArray; n++){
        let cont = array[n].toString();
        let lengthCont = cont.length;
        
        let result = '';
        
        if(lengthCont === 1){
            result = 'true';
        } else if(lengthCont === 2){
            result = 'false';
        } else if(lengthCont === 3){
            result = equalityNumberThird(array[n]);
        } else if(lengthCont === 4){
            result = equalityNumberFour(array[n]);
        } else if(lengthCont === 5){
            result = equalityNumberFive(array[n])
        }
        
        console.log(result)
    }
    
    function equalityNumberThird(first){

        let numbers = first.toString();

        if(numbers[0] === numbers[2]){
            return true;
        } else {
            return false;
        }
    }
    function equalityNumberFour(first){
        let number = first.toString();

        if(number[0] === number[4] && number[1] === number[2]){
            return true;
        } else {
            return false;
        }
    }
    function equalityNumberFive(first){
        let number = first.toString();

        if(number[0] === number[4] && number[1] === number[3]){
            return true;
        } else {
            return false;
        }
    }
}

// palindromeIntegers([123,323,421,121])
// palindromeIntegers([32,2,232,1010])
palindromeIntegers([32,2,232,10001])

// при четири цифри ако първата и четвъртътата са еднакви и същевременно втората и трета 