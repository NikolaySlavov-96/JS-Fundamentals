function rightPlace(wordMissing , charatMissing , fullWord){

    let fullWords = fullWord.includes(charatMissing) ? "Matched" : "Not Matched";

    console.log(fullWords)
}

rightPlace('Str_ng', 'i', 'String')