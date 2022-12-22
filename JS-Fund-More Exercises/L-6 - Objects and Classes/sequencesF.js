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

    let newSort = Object.entries(newArr);
    newSort.sort(([keyA , valueA] , [keyB , valueB]) => valueA - valueB);

    for (const line of newSort) {
        let sline = line.pop();
        let temporary = '';
        let slip = line[0].split(`,`);
        let lineLenght = slip.length;

        for(let n = 0; n < lineLenght; n++){

            if(n !== (lineLenght - 1)){
                temporary += (`${slip[n]}, `);
            } else {
                temporary += (`${slip[n]}`)
            }
        }
        console.log(`[${temporary}]`)
    }
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"])