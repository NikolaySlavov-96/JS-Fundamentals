function replaceRepeatingChars(wordss){

    let specialWord = wordss[0];
    let wordLength = (wordss.length - 1);
    for(let n = 0; n < wordLength; n++){
        if(wordss[n] !== wordss[n + 1]){
            specialWord += wordss[n + 1];
        }
    }
    console.log(specialWord)
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')