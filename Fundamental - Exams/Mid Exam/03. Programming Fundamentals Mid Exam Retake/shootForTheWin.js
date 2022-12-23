function shootForTheWin(array){

    let workArray = array.shift(``).split(` `);
    let lengthWorkArray = workArray.length;
    let commandArray = array;   
    let shotWin = 0;
    
    for(let n = 0; n < lengthWorkArray; n++){
        
        let numberCommandArray = Number.parseInt(commandArray[n]);

        if((lengthWorkArray - 1) >= numberCommandArray && numberCommandArray >= 0){
            shotWin++;

            for(let q = 0; q < lengthWorkArray; q++){


                let temporaryCoin = Number(workArray[numberCommandArray]);
                if(q !== numberCommandArray && workArray[q] !== -1){
                    if(temporaryCoin < workArray[q]){
                        let temporary = Number(workArray[q]) - temporaryCoin;
                        workArray[q] = temporary;
                    } else {
                        let temporary = Number(workArray[q]) + temporaryCoin;
                        workArray[q] = temporary;
                    }
                }
                if(q === (lengthWorkArray - 1)){
                    workArray[numberCommandArray] = -1;
                }
            }
        }
        
    }

    console.log(`Shot targets: ${shotWin} -> ${workArray.join(' ')}`)
}

shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])

shootForTheWin(["30 30 12 60 54 66",
"5",
"2",
"4",
"0",
"End"])

