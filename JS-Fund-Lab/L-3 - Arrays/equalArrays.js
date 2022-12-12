function equalArrays(arrayFirst , arraySecond){
    
    let counter = arrayFirst.length;
    let isCorrect = false;

    let sumArray = 0;
    let identical = 0;

    let counterStop = 0;

    for(let n = 0; n < counter; n++){
        sumArray += Number(arrayFirst[n]);
    }

    for(let q = 0; q < counter; q++){
        if(arrayFirst[q] !== arraySecond[q]){
            identical = q;
            isCorrect = true;
            counterStop++;
            if(counterStop === 1){
                break;
            }
        }
    }
    if(isCorrect){
        console.log(`Arrays are not identical. Found difference at ${identical} index`)
    } else {
        console.log(`Arrays are identical. Sum: ${sumArray}`)
    }
}
equalArrays(['10','20','30'], ['10','20','30'])
// equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])
// equalArrays(['1'], ['10'])