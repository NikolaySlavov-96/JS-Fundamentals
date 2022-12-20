function addAndSubtract(first , second , third){

    let twoNumber = (first , second) => first + second;

    let finalResult = twoNumber(first , second) - third;

    return finalResult;
}

let print = addAndSubtract(23,6,10);

console.log(print)