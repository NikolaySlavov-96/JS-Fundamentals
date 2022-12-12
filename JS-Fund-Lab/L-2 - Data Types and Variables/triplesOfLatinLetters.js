function triplesOfLatinLetters(numberWords){

    let firstWords = '';
    let secondWords = '';
    let thirdWords = '';

    for(let n = 0; n < numberWords; n++){
        for(let q = 0; q < numberWords; q++){
            for(let f = 0; f < numberWords; f++){
                firstWords = String.fromCharCode(97 + n);
                secondWords = String.fromCharCode(97 + q);
                thirdWords = String.fromCharCode(97 + f);
                
                console.log(`${firstWords}${secondWords}${thirdWords}`)
            }
        }
    }
}

triplesOfLatinLetters(3)