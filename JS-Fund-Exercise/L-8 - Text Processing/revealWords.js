function revealWords(serchWord , textForEdit){

    let editWords = serchWord.split(`, `);
    
    for (const word of editWords) {
        let wordLength = '*'.repeat(word.length);
        textForEdit = textForEdit.replace(wordLength , word);
    }

    console.log(textForEdit)
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')