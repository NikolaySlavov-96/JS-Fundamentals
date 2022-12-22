function sortNumbers(first , second , third){

    let firstNumber = -100;
    let secondNumber = -100;
    let thirdNumber = -100;

    if(first > second){
        if(first > third){
            firstNumber = first;
            if(second < third){
                secondNumber = third;
                thirdNumber = second;
            } else {
                secondNumber = second;
                thirdNumber = third;
            }
        } else if(first < third){
            firstNumber = third;
            secondNumber = first;
            thirdNumber = second;
        }
    } else if(first < second){
        if(first > third){
            firstNumber = second;
            secondNumber = first;
            thirdNumber = third;
        } else if(first < third){
            thirdNumber = first;
            if(second > third){
                firstNumber = second;
                secondNumber = third;
            } else {
                firstNumber = third;
                secondNumber = second;
            }
        }
    } else {
        firstNumber = third;
        if(first <= second){
            secondNumber = second;
            thirdNumber = first
        } else {
            secondNumber = first;
            thirdNumber = second;
        }
    }
    console.log(firstNumber)
    console.log(secondNumber)
    console.log(thirdNumber)
}

sortNumbers(0 , 0  , -2)