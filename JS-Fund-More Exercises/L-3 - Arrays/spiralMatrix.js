function spiralMatrix(row,col){
    
    let rowMatrixBegin = 0;
    let rowMatrixEnd = Number(row) - 1;
    let colMatrihBegin = 0;
    let colMatrixEnd = Number(col) - 1;

    let saveResult = [];
    let number = 1;

    for(let n = 0; n < row; n++){
        saveResult.push([]);
    }

    while(colMatrihBegin <= colMatrixEnd && rowMatrixBegin <= rowMatrixEnd){

        for(let n = colMatrihBegin; n <= colMatrixEnd; n++){
            saveResult[rowMatrixBegin][n] = number;
            number++
        }
        rowMatrixBegin++;
        
        for(let q = rowMatrixBegin; q <= rowMatrixEnd; q++){
            saveResult[q][colMatrixEnd] = number;
            number++
        }
        colMatrixEnd--;

        for(let v = colMatrixEnd; v >= colMatrihBegin; v--){
            saveResult[rowMatrixEnd][v] = number;
            number++;
        }
        rowMatrixEnd--;

        for(let g = rowMatrixEnd; g >= rowMatrixBegin; g--){
            saveResult[g][colMatrihBegin] = number;
            number++;
        }
        colMatrihBegin++;
    }

    saveResult.forEach(line => console.log(line.join(` `)))
}

spiralMatrix(5 , 5)