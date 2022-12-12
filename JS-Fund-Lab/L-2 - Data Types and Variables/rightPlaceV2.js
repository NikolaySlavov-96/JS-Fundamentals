function rightPlace(wordMissing , charatMissing , fullWord){

    let fullWords = wordMissing.replace('_', charatMissing);
    let finalResult = fullWords === fullWord ? 'Matched' : 'Not Matched'

    console.log(finalResult)
}

// rightPlace('Str_ng', 'i', 'String')
rightPlace('Str_ng', 'I', 'String')
