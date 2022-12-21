function wordTracker(inoutWord){

    let serchWord = inoutWord.shift().split(` `);

    let objectsWordsSerch = {};

    serchWord.forEach(element => {
        objectsWordsSerch[element] = 0;
    });

    inoutWord.forEach(element => {
        if(objectsWordsSerch.hasOwnProperty(element)){
            objectsWordsSerch[element]++;
        }
    })

    let sortObject = Object.entries(objectsWordsSerch).sort((first , second) => second[1] - first[1]);

    sortObject.forEach(element => {console.log(`${element[0]} - ${element[1]}`)})

}
wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])