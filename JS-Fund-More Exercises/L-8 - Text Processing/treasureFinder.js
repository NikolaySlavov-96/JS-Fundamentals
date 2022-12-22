function treasureFinder(inputArr){

    let decryptingCode = inputArr.shift().split(` `).join(``);
    let commands = inputArr.shift();

    let storeAll = [];

    while(commands !== 'find'){

        let counterLength = 0;
        let temporaryWord = '';
        let counterAnd = 0;
        let counterCordinat = 0;

        for (const char of commands) {

            let newWord = '';
            let charNumber = char.charCodeAt();
            charNumber -= decryptingCode[counterLength];
            counterLength++;
            newWord = String.fromCharCode(charNumber);
            
            if(newWord === '&'){
                counterAnd++;
            }
            
            if(newWord === '<' || (newWord === '>' && counterCordinat === 1)){
                counterCordinat++;
            }
            
            if(counterAnd > 0 && counterAnd < 2) {
                temporaryWord += newWord;
            }

            if(counterCordinat > 0 && counterCordinat < 2){
                temporaryWord += newWord;
            }

            if(counterLength === decryptingCode.length){
                counterLength = 0;
            }
        }
        
        storeAll.push(temporaryWord);
        commands = inputArr.shift();
    }

    storeAll.forEach(el => {
        if(el.includes('&') && el.includes('<')){
            let newString = el.split(`<`);
            let editString = newString[0].split(`&`)[1];

            console.log(`Found ${editString} at ${newString[1]}`)
        }
    });
}

treasureFinder(["1 2 1 3",
"ikegfp'jpne)bv=41P83X@",
"ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
"find"])