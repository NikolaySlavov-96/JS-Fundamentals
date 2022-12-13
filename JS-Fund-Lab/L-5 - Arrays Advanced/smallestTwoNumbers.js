function smallestTwoNumbers(arr){

    let firstElement = arr[0];

    let result = arr.filter((num) => num < firstElement).reverse();

    console.log(result.join(` `))

}

smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])