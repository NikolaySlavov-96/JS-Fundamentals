function smallestOfThreeNumbers(first , second , third){

    let sum = fromTwoNumbersOneSmallest(first , second);

    function fromTwoNumbersOneSmallest(numberOne , numberTwo){
        let smallestNumb = 0;

        if(numberOne <= numberTwo){
            smallestNumb = numberOne;
        } else if(numberTwo < numberOne){
            smallestNumb = numberTwo;
        }

        return smallestNumb;
    }
    if(sum <= third) {
        return sum;
    } else {
        return third;
    }
}
// let prints = smallestOfThreeNumbers(2,5,3)
let prints = smallestOfThreeNumbers(2,2,2)

console.log(prints)