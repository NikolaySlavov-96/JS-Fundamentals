function repeatString(words , quantity){
    
    let counterPrint = 0;
    let printWord = '';

    while(counterPrint !== quantity){
        printWord += words
        counterPrint++;
    }

    return printWord;
}

let printString = repeatString("abc", 3)

console.log(printString)