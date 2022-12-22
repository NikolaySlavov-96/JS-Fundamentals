function valueOfAString(inputArr){

    let allWords = inputArr.shift();
    let caseInput = inputArr.shift();
    let second = '';

    let totalSum = 0;

    if(caseInput === 'LOWERCASE'){
        second = allWords.toUpperCase();
    } else if(caseInput === 'UPPERCASE'){
        second = allWords.toLowerCase();
    }

    for(let n = 0; n < allWords.length; n++){
        if(allWords[n] !== second[n]){
            let temporary = allWords[n].charCodeAt();
            totalSum += temporary;
        }
    }
    
    console.log(`The total sum is: ${totalSum}`)
}

valueOfAString(['AC/DC',
'UPPERCASE'])