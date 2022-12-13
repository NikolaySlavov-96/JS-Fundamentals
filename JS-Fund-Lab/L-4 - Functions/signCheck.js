function signCheck(first , second , third){
    let check = checkTwoNumber(first , second);

    function checkTwoNumber (first , second){
        
        let returnResult = '';
        
        if((first < 0 && second < 0) || (first > 0 && second > 0)){
            returnResult = 'Positive';
        } else {
            returnResult = 'Negative';
        }

        return returnResult;

    }

    if((check === 'Positive' && third > 0) || (check === 'Negative' && third < 0)){
        console.log('Positive')
    } else {
        console.log('Negative')
    }
}

// signCheck( 5,12,-15);
// signCheck(-5,1,1);
// signCheck(-1,-2,-3);
// signCheck(-6,-12,14);
signCheck(-6,12,-14);