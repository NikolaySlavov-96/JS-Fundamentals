function cardGame(array){

    let newObjects = {};

    array.forEach(element => {

        let [name , cards] = element.split(`: `);

        if(!newObjects.hasOwnProperty(name)){
            newObjects[name] = [];
        }
        let cardsArr = cards.split(`, `)
        cardsArr.forEach(el => {
            newObjects[name].push(el);
        })
    });
    
    for (const line in newObjects) {

        let result = calculatinResult(newObjects[line])

        newObjects[line] = result;
    }

    function calculatinResult(arrayOfCards){

        let allSum = 0;
        let obectNewsMap = new Map();

        arrayOfCards.forEach(el => {
        
            obectNewsMap.set(el);
        })

        let arrayOfCardName = Array.from(obectNewsMap)
        
        for (const el of arrayOfCardName) {

            let size = el[0].length;
            let last = el[0][size - 1];
            if(size === 3){
                first = el[0][0] + el[0][1]
            } else if(size == 2){
                first = el[0][0];
            }
            let temporary = 0;

            let typeCard = 0;

            switch(last){
                case 'S': typeCard = 4; break;
                case 'H': typeCard = 3; break;
                case 'D': typeCard = 2; break;
                case 'C': typeCard = 1; break;
            }
            switch(first){
                case 'J': temporary = 11 * typeCard; break;
                case 'Q': temporary = 12 * typeCard; break;
                case 'K': temporary = 13 * typeCard; break;
                case 'A': temporary = 14 * typeCard; break;
                default: temporary = Number(first) * typeCard; break;
            }
            allSum += temporary;
        }

        return allSum;
    }

    for (const key in newObjects) {
        
        console.log(`${key}: ${newObjects[key]}`)
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ])
//Pri test s stoinost na karta razli4na ot podadenite danni 6te gramne zaradi razli4na stoinost i lipsa na prowerka


//     Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A)
// Powers 2 to 10 have the same value and J to A are 11 to 14. 
// Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).