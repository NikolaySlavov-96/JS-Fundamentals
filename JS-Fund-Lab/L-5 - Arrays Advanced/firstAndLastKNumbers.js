function firstAndLastKNumbers(arrAndBorder){

    let borderArr = arrAndBorder.shift();

    let firstElement = arrAndBorder.slice(0, borderArr);
    let finalElement = arrAndBorder.slice(arrAndBorder.length - borderArr);

    console.log(firstElement.join(` `));
    console.log(finalElement.join(` `))
}

firstAndLastKNumbers([2, 7, 8, 9])
// firstAndLastKNumbers([3, 6, 7, 8, 9])