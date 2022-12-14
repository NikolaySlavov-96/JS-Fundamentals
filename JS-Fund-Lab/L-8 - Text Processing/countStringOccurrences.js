function censored(text , wordEdit){

    let count = text;

    while(count.includes(wordEdit)){
        count = count.replace(wordEdit, '*'.repeat(wordEdit.length));
    }
    
    console.log(count)
}

censored('A small sentence with some words small', 'small')