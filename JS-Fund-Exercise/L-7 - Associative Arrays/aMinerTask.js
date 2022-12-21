function aMinerTask(inputStore){

    let storeLength = inputStore.length;
    let storeObject = {};

    for(let n = 0; n < storeLength; n+= 2){

        let resorce = inputStore[n];
        let quantity = Number(inputStore[n + 1]);

        if(!storeObject.hasOwnProperty(resorce)){
            storeObject[resorce] = 0;
        }

        storeObject[resorce] += quantity;
    }
    
    for (const lines in storeObject) {
        
        console.log(`${lines} -> ${storeObject[lines]}`)
    }

}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])