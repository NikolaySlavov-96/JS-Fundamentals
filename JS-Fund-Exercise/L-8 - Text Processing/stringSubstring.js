function stringSubstring(serchName , text){

    let arraytext = text.split(` `);
    let isCorrcet = false;

    for (const word of arraytext) {

        if(word.toLowerCase() === serchName.toLowerCase()){
            isCorrcet = true;
            return console.log(serchName)
        }
    }
    if(isCorrcet === false){
        console.log(`${serchName} not found!`);
    }
}

stringSubstring('javascript','JavaScript is the best programming language');