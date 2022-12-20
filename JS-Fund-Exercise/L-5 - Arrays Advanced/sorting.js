function sorting(arr){

    let arrSort = arr.sort((a , b) => a - b);

    let printResult = [];

    while(arrSort.length > 0){

        let lastElement = arrSort.pop();
        let firstElement = arrSort.shift();
        printResult.push(lastElement);
        printResult.push(firstElement);

    }
    
    console.log(printResult.join(` `))
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])