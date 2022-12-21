function pascalCaseSplitter(text){

    let printWords = text[0];
    let edit = text.substring(1);
    
    for (const word of edit) {
        if(word === word.toUpperCase()){
            printWords += (`, `)
        }
        printWords += word
    }
    console.log(printWords.trim())
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')