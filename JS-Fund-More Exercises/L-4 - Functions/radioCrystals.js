function radioCrystals(arrayProcess){
    
    let index = 0;
    let finalSizeCrystal = arrayProcess[index++]
    let beginSizeCrystal = arrayProcess[index++];
    let calculate = 0;


    function calculateOperation(first , second){
        
        let desireSize = first;
        let beginSizeNotEdit = second;
        let beginSize = second;
        let cut = 0;
        let lap = 0;
        let grid = 0;
        let etch = 0;
        let xRay = 0;
        let resultArray = []; 

        for(let n = beginSize; n > desireSize; n--){
    
            if(beginSize % 4 === 0 && beginSize / 4 >= desireSize){
                cut++;
                beginSize /= 4;
            } else if(beginSize - (beginSize * 0.20) >= desireSize){
                lap++;
                beginSize -= beginSize * 0.2;
            } else if((beginSize - 20) >= desireSize && beginSize > desireSize){
                grid++;
                beginSize -= 20;
            } else if(beginSize > desireSize && (beginSize + 1) >= desireSize){
                etch++;
                beginSize -= 2;
            }
            if(!Number.isInteger(beginSize)){
                beginSize = Math.floor(beginSize);
            } 
        }

        if(beginSize < desireSize && xRay < 1 ){
            xRay++;
            beginSize += 1;
        }

        resultArray.push(beginSizeNotEdit , cut , lap , grid , etch , xRay , beginSize)

        return resultArray;
    }

    for(let g = 2; g <= arrayProcess.length; g++){

        if(g === 2){
            calculate = calculateOperation(finalSizeCrystal , beginSizeCrystal)
        } else {
            calculate = calculateOperation(finalSizeCrystal , arrayProcess[index++])
        }
        
        console.log(`Processing chunk ${calculate[0]} microns`)
        if(calculate[1] > 0){
            console.log(`Cut x${calculate[1]}`)
            console.log(`Transporting and washing`)
        }
        if(calculate[2] > 0){
            console.log(`Lap x${calculate[2]}` )
            console.log(`Transporting and washing`)
        }
        if(calculate[3] > 0){
            console.log(`Grind x${calculate[3]}`)
            console.log(`Transporting and washing`)
        }
        if(calculate[4] > 0){
            console.log(`Etch x${calculate[4]}`)
            console.log(`Transporting and washing`)
        }
        if(calculate[5] > 0){
            console.log(`X-ray x${calculate[5]}`)
        }
        console.log(`Finished crystal ${calculate[6]} microns`)
    }
}


// radioCrystals([1375, 50000])
// radioCrystals([1000, 4000, 8100])
radioCrystals([1000, 8100])
// radioCrystals([1000, 8550])