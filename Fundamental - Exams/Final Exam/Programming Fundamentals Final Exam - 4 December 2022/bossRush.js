function bossRush(array){

    const quantityLine = array.shift();

    const searchPattern = /\|(?<leader>[A-Z]{4,})\|:#(?<title>[A-Za-z]+[ ]?[A-Za-z]*)#/g;
    
    for(let n = 0; n < quantityLine; n++){
        let printResult = false;
        
        let results = array[n].matchAll(searchPattern);

        for (const iterator of results) {
            console.log(`${iterator.groups.leader}, The ${iterator.groups.title}`)
            console.log(`>> Strength: ${iterator.groups.leader.length}`)
            console.log(`>> Armor: ${iterator.groups.title.length}`)
            printResult = true;
        }

        if(!printResult){
            console.log(`Access denied!`)
        }
    }
}

bossRush(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#'])