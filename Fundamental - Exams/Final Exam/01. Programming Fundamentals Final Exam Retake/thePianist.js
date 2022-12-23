function thePianist(arrInp){

    let libraryQuantity = arrInp.shift();
    let pianoObj = {};

    for(let n = 0; n < libraryQuantity; n++){
        let [piece , composer , key] = arrInp.shift().split(`|`);
        pianoObj[piece] = {};
       
        pianoObj[piece][composer] = key
    }

    for (const line of arrInp) {
        let [command , piece , composer , key] = line.split(`|`);

        if(command === 'Stop'){
            break;
        }

        switch(command){
            case 'Add': addInObj(piece , composer , key); break;
            case 'Remove': removeInObj(piece); break;
            case 'ChangeKey': changeKeyInObj(piece , composer); break;
        }
    }

    //print // 
    for (const line in pianoObj) {
        let second = pianoObj[line]
        for (const el in second) {
            
            console.log(`${line} -> Composer: ${el}, Key: ${second[el]}`)
        }
    }


    //remote Function
    function addInObj(piece , composer , key){
        if(pianoObj.hasOwnProperty(piece)){
            console.log(`${piece} is already in the collection!`)
            return
        }
        pianoObj[piece] = {};
        pianoObj[piece][composer] = key
        console.log(`${piece} by ${composer} in ${key} added to the collection!`)
    }

    function removeInObj(piece){
        if(pianoObj.hasOwnProperty(piece)){
            console.log(`Successfully removed ${piece}!`);
            delete pianoObj[piece];
            return
        } 

        console.log(`Invalid operation! ${piece} does not exist in the collection.`)
    }

    function changeKeyInObj(piece , newPiece){
        if(pianoObj.hasOwnProperty(piece)){
            let composer = Object.keys(pianoObj[piece]);
            pianoObj[piece][composer] = newPiece;
            console.log(`Changed the key of ${piece} to ${newPiece}!`)
            return
        }

        console.log(`Invalid operation! ${piece} does not exist in the collection.`)
    }
    
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ])
// thePianist([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'  
//   ])