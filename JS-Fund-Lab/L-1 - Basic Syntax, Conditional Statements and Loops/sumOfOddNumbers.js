function sumOfOddNumbers(begin){

    let beginNumber = begin;
    let counter = 1;
    let sumCounter = 0;
    
    for(let n = 1; n <= beginNumber; n++){
        console.log(counter);
        sumCounter += counter;
        counter += 2;
    }
    console.log(`Sum: ${sumCounter}`);
}
sumOfOddNumbers(5)