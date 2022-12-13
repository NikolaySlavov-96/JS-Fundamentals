function processOddNumbers(arr){

    let newArr = [];

    for(let q = 0; q < arr.length; q++){
        if(q % 2 !== 0){
            newArr.push(arr[q] * 2);
        }
    }

    let printResult = newArr.reverse().join(` `);
    
    console.log(printResult)
}

processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3])