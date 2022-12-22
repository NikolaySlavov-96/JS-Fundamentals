function rosettaStone(array){

    let rowTemplateMatrix = Number(array.shift());
    let templateMatrix = [];
    let printResult = '';

    for(let n = 0; n < rowTemplateMatrix; n++){
        let line = array.shift();
        line = line.split(` `).map(x => Number(x));
        templateMatrix.push(line);
    }

    let counterRowAll = 0;
    let counterRow = 0;
    
    for (const line of array) {
        let newTable = line.split(` `).map(x => Number(x));
        let newTableLength = newTable.length;
        let counterCell = 0;

        for(let n = 0; n < newTableLength; n++){
            if(counterRowAll % 2 === 0){
                let temporary = templateMatrix[counterRow][counterCell];
                let temporaryLine = newTable[n];

                let result = changeNumberToWord(temporary , temporaryLine);
                newTable[n] = result;
                counterCell++;
            } else if(counterRowAll % 2 !== 0) {
                let temporary = templateMatrix[counterRow][counterCell];
                let temporaryLine = newTable[n];

                let result = changeNumberToWord(temporary , temporaryLine);
                newTable[n] = result;
                counterCell++;
            }

            if(counterCell === (templateMatrix[0].length)){
                counterCell = 0;
            }
        }
        array[counterRowAll] = newTable;
        counterRow++;
        if(counterRow === rowTemplateMatrix){
            counterRow = 0;
        }
        counterRowAll++;
    }

    // console.table(array);
    console.log(printResult)
    
    function changeNumberToWord(arrNumber , currentNumber){
        
        let checkSum = arrNumber + currentNumber;
        
        while(checkSum > 26){
            checkSum -= 27;
        }

        switch(checkSum){
            case 0: resultWord = ' '; break;
            case 1: resultWord = 'A'; break;
            case 2: resultWord = 'B'; break;
            case 3: resultWord = 'C'; break;
            case 4: resultWord = 'D'; break;
            case 5: resultWord = 'E'; break;
            case 6: resultWord = 'F'; break;
            case 7: resultWord = 'G'; break;
            case 8: resultWord = 'H'; break;
            case 9: resultWord = 'I'; break;
            case 10: resultWord = 'J'; break;
            case 11: resultWord = 'K'; break;
            case 12: resultWord = 'L'; break;
            case 13: resultWord = 'M'; break;
            case 14: resultWord = 'N'; break;
            case 15: resultWord = 'O'; break;
            case 16: resultWord = 'P'; break;
            case 17: resultWord = 'Q'; break;
            case 18: resultWord = 'R'; break;
            case 19: resultWord = 'S'; break;
            case 20: resultWord = 'T'; break;
            case 21: resultWord = 'U'; break;
            case 22: resultWord = 'V'; break;
            case 23: resultWord = 'W'; break;
            case 24: resultWord = 'X'; break;
            case 25: resultWord = 'Y'; break;
            case 26: resultWord = 'Z'; break;
            
        }
        printResult += resultWord;
        return checkSum;
    }
}

rosettaStone([ '2',
'59 36',
'82 52',
'4 18 25 19 8',
'4 2 8 2 18',
'23 14 22 0 22',
'2 17 13 19 20',
'0 9 0 22 22' ])

// rosettaStone(['1',
//     '1 3 13',
//     '12 22 14 13 25 0 4 24 23',
//     '18 24 2 25 22 0 0 11 18',
//     '8 25 6 26 8 23 13 4 14',
//     '14 3 14 10 6 1 6 16 14',
//     '11 12 2 10 24 2 13 24 0',
//     '24 24 10 14 15 25 18 24 12',
//     '4 24 0 8 4 22 19 22 14',
//     '0 11 18 26 1 19 18 13 15',
//     '8 15 14 26 24 14 26 24 14'
// ]);