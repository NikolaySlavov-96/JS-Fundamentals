function censoredWords(arr , serchWord){

    let count = arr.split(` `).filter(w => w === serchWord).length;

    console.log(count)
}

censoredWords('This is a word and it also is a sentence',
'is')