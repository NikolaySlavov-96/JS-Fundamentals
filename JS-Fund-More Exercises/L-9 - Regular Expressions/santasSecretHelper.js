function santasSecretHelper(input){

    let keyDescript = input.shift();
    let command = input.shift();

    // let patternEditName = /@(?<name>[A-Za-z]+)[^@\-!:>][\w\d]+!(?<behavior>[G|N])!/g;
    let patternEditName = /@(?<name>[A-Za-z]+)[^@\-!:>]+!(?<behavior>[G|N])!/g;

    let storeChar = [];
    let childrenArr = [];
    
    while(command !== 'end'){

        let temporaryChar = '';
        for (const character of command) {
            let sumChar = character.charCodeAt();
            sumChar -= keyDescript;
            temporaryChar += String.fromCharCode(sumChar)
        }
        storeChar.push(temporaryChar)

        command = input.shift();
    }

    let correctName = storeChar.join(``).matchAll(patternEditName);

    for (const line of correctName) {
        let store = {name: line.groups.name , behavior: line.groups.behavior}
        childrenArr.push(store);
    }  
    
    childrenArr.forEach(el => {
        if(el.behavior === 'G'){
            console.log(el.name)
        }
    });
}

santasSecretHelper(['3',
'CNdwhamigyenumje$J$',
'CEreelh-nmguuejnW$J$',
'CVwdq&gnmjkvng$Q$',
'end'])

// santasSecretHelper(['3',
// 'N}eideidmk$'(mnyenmCNlpamnin$J$',
// 'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
// 'ppqmkkkmnolmnnCEhq/vkievk$Q$',
// 'yyegiivoguCYdohqwlqh/kguimhk$J$',
// 'end'])


//wrong --> chech dont first small words 