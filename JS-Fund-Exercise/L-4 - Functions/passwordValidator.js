function passwordValidator(letter){

    let letterLength = letter.length;
    let isShortOrLong = false;
    let isCorrectSymbol = false;
    let counterNumber = 0;
    let isCorrectPassword = true;

    if(letterLength < 6 || letterLength > 10){
        isShortOrLong = true;
        isCorrectPassword = false;
    }

    for(let n = 0; n < letterLength; n++){
        if(!letter[n].search(/[^A-Za-z0-9 ]/)){
            isCorrectSymbol = true;
        }
        if(letter[n].search(/[^0-9 ]/)){
            counterNumber++;
        }
    }
    if(isShortOrLong){
        console.log(`Password must be between 6 and 10 characters`);
    }
    if(isCorrectSymbol){
        console.log(`Password must consist only of letters and digits`);
        isCorrectPassword = false;
    }

    if(counterNumber < 2){
        console.log(`Password must have at least 2 digits`);
        isCorrectPassword = false;
    }

    if(isCorrectPassword){
        console.log(`Password is valid`)
    }
}

// passwordValidator('logIn22')
// passwordValidator('Pa$s$')
passwordValidator('MyPass12')