function sortNumbers(first , second , third){

    let firstPosition = Number.MIN_SAFE_INTEGER;
    let secondPosition = 0;
    let thirdPosition = 0;
 
    let waitingPosition = 0;
 
    if (first > firstPosition) {
        firstPosition = first;
        secondPosition = second;
        thirdPosition = third;
    }
    if (second > firstPosition) {
        firstPosition = second;
        secondPosition = first;
        thirdPosition = third;
    }
    if (third > firstPosition) {
        firstPosition = third;
        secondPosition = first;
        thirdPosition = second;
    }
 
    if (thirdPosition > secondPosition) {
        waitingPosition = secondPosition;
        secondPosition = thirdPosition;
        thirdPosition = waitingPosition;
    }
 
    console.log(firstPosition);
    console.log(secondPosition);
    console.log(thirdPosition);
}

sortNumbers(2 , 1 , 3)