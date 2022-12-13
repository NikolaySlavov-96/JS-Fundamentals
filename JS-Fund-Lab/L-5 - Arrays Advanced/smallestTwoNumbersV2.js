function smallestTwoNumbers(arr){

    let firstElement = arr.sort((a , b) => a - b);

    let printResult = firstElement.slice(0 , 2).join(` `);

    console.log(printResult)
}

smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])