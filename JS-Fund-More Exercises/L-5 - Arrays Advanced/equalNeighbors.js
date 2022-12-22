function equalNeighbors(arr){

    let lengthArray = arr.length;
    
    let counter = 0;

    for(let n = 0; n < lengthArray; n++){

        let rowArr = arr[n];
        let rowLength = rowArr.length;

        for(let q = 0; q < rowLength; q++){
            let colum = rowArr[q];

            if (n !== arr.length - 1) {
                if (colum === rowArr[q + 1]) {
                    counter++;
                }
                if (colum === arr[n + 1][q]) {
                    counter++;
                }
            }
            else if (colum === rowArr[q + 1] || colum === arr[n][q + 1]) {
                counter++;
            }
        }
    }
    console.log(counter)
}

equalNeighbors([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]
)