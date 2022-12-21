function passwordGenerator(input){

    let oneLine = input[0] + input[1];
    let textReplace = input[2].toUpperCase();
    let counterReplaceWord = 0;
    let wordReplace = ['a' , 'e' , 'i' , 'o' , 'u'];
    let result = '';
    
    for (const word of oneLine) {
        if(wordReplace.includes(word)){
            result += textReplace[counterReplaceWord];
            counterReplaceWord++;
            if(textReplace[counterReplaceWord] === undefined){
                counterReplaceWord = 0;
            }
        } else {
            result += word;
        }
    }

    let reverseElement = result.split(``).reverse().join(``)
    console.log(`Your generated password is ${reverseElement}`)
}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ])