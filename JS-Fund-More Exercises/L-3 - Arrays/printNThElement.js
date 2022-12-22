function printNThElement(data){

    let step = Number(data[data.length - 1]);
    let xIndex = data.length - 1;
    let resultPrint = '';

    for(let n = 0; n < xIndex; n += step){
        resultPrint += (`${data[n]} `);
    }
    
    console.log(resultPrint)
}

// printNThElement(['5', '20', '31', '4', '20', '2'])
// printNThElement(['dsa', 'asd', 'test', 'test', '2'])
printNThElement(['1', '2', '3', '4', '5', '6'])