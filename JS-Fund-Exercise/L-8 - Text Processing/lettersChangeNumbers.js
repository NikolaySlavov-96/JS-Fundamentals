function lettersChangeNumbers(text){
    
    let inputText = text.split(` `);
    let counter = 0;


    for (const line of inputText) {
        if(line !== ''){
            let firstWord = line.substring(0 , 1);
            let wordLength = line.length;
            let lastWord = line.substring((wordLength - 1)); // checkValue()
            let numbers = Number(line.substring(1 , (wordLength - 1)));

            if(firstWord === firstWord.toUpperCase()){
                let temporaryValue = checkValue(firstWord);
                numbers /= temporaryValue;
            } else {
                let temporaryValue = checkValue(firstWord);
                numbers *= temporaryValue;
            }

            if(lastWord === lastWord.toUpperCase()){
                let temporaryValue = checkValue(lastWord);
                numbers -= temporaryValue;
            } else {
                let temporaryValue = checkValue(lastWord);
                numbers += temporaryValue;
            }
            counter += numbers;
        }
    }
    console.log(counter.toFixed(2))

    function checkValue(words){
        let newValue = 0;
        newValue = words.charCodeAt();
        
        if(words === words.toUpperCase()){
            newValue -= 64;
        } else {
            newValue -= 96;
        }
        return newValue;
    }
}

// lettersChangeNumbers('A12b s17G') // 330.00
// lettersChangeNumbers('P34562Z q2576f   H456z') // 46015.13
lettersChangeNumbers('a1A') // 0.00

// lettersChangeNumbers('P34562Z q2576f   H456z    A12b s17G')