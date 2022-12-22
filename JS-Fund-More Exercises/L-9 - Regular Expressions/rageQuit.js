function rageQuit(input = []){

    let patternUniqueSymbol = /[\D]+[0-9]+/g;
    let newSymbols = input.shift().match(patternUniqueSymbol);
    let printMessage = '';

    if(newSymbols !== null){
        for (const line of newSymbols) {
            let allText = line.match(/([\D]+)([0-9]+)/);
            let word = allText[1].toUpperCase();
            let counter = allText[2];
            printMessage += word.repeat(counter);
        }
    }
    let counterUnique = Array.from(new Set(printMessage));
    console.log(`Unique symbols used: ${counterUnique.length}`);
    console.log(printMessage)
}

rageQuit([`aSd2&5s@1`])