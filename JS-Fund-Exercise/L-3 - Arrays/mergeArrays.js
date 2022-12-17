function mergeArrays(firstArray , secondArray){

    let counter = firstArray.length;

    let printSum = [];

    for(let n = 0; n < counter; n++){
        if(n % 2 === 0){
            if(n === counter - 1){
                printSum += (`${Number(firstArray[n]) + Number(secondArray[n])}`);
            } else {
                printSum += (`${Number(firstArray[n]) + Number(secondArray[n])} - `);
            }
        } else {
            if(n === counter - 1){
                printSum += (`${(firstArray[n] + secondArray[n])}`);
            } else {
                printSum += (`${(firstArray[n] + secondArray[n])} - `);
            }
        }
    }
    console.log(printSum)
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])