function starEnigma(arr){

    let messagesQuantity = arr.shift();

    let patterSerchKey = /[star]/gi;
    let patterMessage = /@(?<planet>[A-Za-z]+)\d*[^@:!\->]*:[^@:!\->]*(?<population>\d*)[^@:!\->]*!(?<position>[A|D])![^@:!\->]*->(?<soldier>\d*)/g;
    let temporaryResult = [];
    let finalMessage = {};
    let counterA = 0;
    let counterD = 0;

    
    for(let n = 0; n < messagesQuantity; n++){
        
        let keys = 0;
        let result = arr[n].matchAll(patterSerchKey);
        for(const line of result){
            keys++;
        }
        
        let remote = '';
        let createArr = arr[n].split(``);
        createArr.forEach(elementOf => {
            let numberOfSymbol = elementOf.charCodeAt();
            numberOfSymbol -= keys;
            let ageingSymbol = String.fromCharCode(numberOfSymbol);
            remote += ageingSymbol;
        });
        temporaryResult.push(remote)
    }

    for (const line of temporaryResult) {
        
        let decrypting = line.matchAll(patterMessage);
        for (const decrypt of decrypting) {
            let posit = decrypt.groups.position;
            let planetName = decrypt.groups.planet;
            let populationQuantity = decrypt.groups.population;
            let soldiers = decrypt.groups.soldier;

            if(posit === 'A'){
                counterA++;
            } else if(posit === 'D'){
                counterD++;
            }

            if(!finalMessage.hasOwnProperty(planetName)) {
                finalMessage[planetName] = {posit , populationQuantity , soldiers};
            }
        }
    }

    let sortType = Object.entries(finalMessage).sort((a , b) => a[0].localeCompare(b[0]));

    console.log(`Attacked planets: ${counterA}`);
    sortType.forEach(element => {
        if(element[1].posit === 'A'){
            console.log(`-> ${element[0]}`)
        }
    });
    console.log(`Destroyed planets: ${counterD}`);
    sortType.forEach(element => {
        if(element[1].posit === 'D'){
            console.log(`-> ${element[0]}`)
        }
    });
}


starEnigma(['3',
"tt(''DGsvywgerx>6444444444%H%1B9444",
'GQhrr|A977777(H(TTTT',
'EHfsytsnhf?8555&I&2C9555SR'])

// starEnigma(['2',
// 'STCDoghudd4=63333$D$0A53333',
// 'EHfsytsnhf?8555&I&2C9555SR'])
