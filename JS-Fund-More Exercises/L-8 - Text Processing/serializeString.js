function serializeString(arr){

    let words = arr.shift();
    let storeArr = [];

    for(let n = 0; n < words.length; n++){

        let word = words[n];

        if(!storeArr.includes(word)){
            storeArr.push(word);
        }
    }

    while(storeArr.length > 0){
        let word = storeArr.shift();
        let temporary = [];
        for(let q = 0; q < words.length; q++){
            if(word === words[q]){
                temporary.push(q);
            }
        }
        console.log(`${word}:${temporary.join(`/`)}`)
    }
}

// serializeString(["abababa"])
serializeString(["avjavamsdmcalsdm"])