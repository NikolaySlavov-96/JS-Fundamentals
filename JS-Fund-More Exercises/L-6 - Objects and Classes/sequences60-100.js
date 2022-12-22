function sequences(array){

    array = array.map(el => JSON.parse(el));
    array.forEach(el => el.sort((a, b) => b - a));

    let newArr = {};

    array.forEach(element => {

        let lengthArr = element.length;
        if(!newArr.hasOwnProperty(element)){
            newArr[element] = lengthArr;
            
        }
    });

    for (const line in newArr) {
        let temporary = '';
        let spli = line.split(`,`);
        let lineLenght = spli.length;

        for(let n = 0; n < lineLenght; n++){

            if(n !== (lineLenght - 1)){
                temporary += (`${spli[n]}, `);
            } else {
                temporary += (`${spli[n]}`)
            }
        }
        console.log(`[${temporary}]`)
    }
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"])