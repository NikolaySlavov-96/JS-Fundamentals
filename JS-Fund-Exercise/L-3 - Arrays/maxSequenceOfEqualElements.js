function maxSequenceOfEqualElements(array){

    let arrayLength = array.length
    let sumAll = 0;
    let allPrint = '';
    
    for(let n = 0; n < arrayLength; n++){
        let counter = 0;
        let remember = 0;
        let savePrint = '';
        let oneMoment = 0;
        if(array[n] === array[n + 1]){
            for(let q = n; q < arrayLength; q++){
                remember = array[q];
                if(array[n] === array[q] && (array[q - 1] === array[q] || array[q + 1] === array[q])){
                    oneMoment++;
                    counter = oneMoment;
                    savePrint += (`${array[q]} `);
                } else if(array[n] !== array[q]) {
                    oneMoment = 0;
                }
            }
        }
        if(sumAll < counter){
            allPrint = ''
            sumAll = counter;
            allPrint += savePrint;
        }
    }
    console.log(allPrint)
}

// maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
// maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])
// maxSequenceOfEqualElements([4, 4, 4, 4])
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])
