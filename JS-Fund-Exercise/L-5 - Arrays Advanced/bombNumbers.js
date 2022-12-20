function bombNumbers(arrBomb , specialNumber){

    while(arrBomb.includes(specialNumber[0])){
        let indexNumber = arrBomb.indexOf(specialNumber[0]);
        let endPowerBomb = (specialNumber[1] * 2 + 1);
        let beginPowerRange = (indexNumber - specialNumber[1]);
    
        if(beginPowerRange < 0) {
            // endPowerBomb += beginPowerRange;
            beginPowerRange = 0;
        }
        arrBomb.splice(beginPowerRange, endPowerBomb);
    }
    let printView = 0;

    for(let q = 0; q < arrBomb.length; q++){
        printView += Number(arrBomb[q])
    }

    console.log(printView)
}


// bombNumbers([1, 4, 4, 2, 8, 9, 1],[9, 3])

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],[4, 2])

// bombNumbers([1, 7, 7, 1, 2, 3],[7, 1])

// bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1])

