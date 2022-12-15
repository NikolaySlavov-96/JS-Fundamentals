function thePyramidOfKingDjoser(firstMultiply , secondNumber){
    
    let baseX = firstMultiply;
    if(baseX % 2 === 0){
        baseX -= 1
    }
    let sumStone = firstMultiply;
    let increment = secondNumber;
    
    let counter = 0;
    let allUsingStone = 0;
    let allUsingMarble = 0;
    let allUsingLapis = 0;
    let allUsingGold = 0;
    
    for(let rowN = baseX; rowN >= 2; rowN-=2){
        counter++;
        let allSum = (sumStone * 4) - 4;
        let allStoneSum = sumStone * sumStone - allSum
        
        allUsingStone += allStoneSum; 

        if(counter % 5 !== 0){
            allUsingMarble += allSum;
        } else {
            allUsingLapis += allSum;
        }
        
        sumStone-=2;
    }
    
    counter++;
    allUsingGold = sumStone * sumStone;
    
    console.log(`Stone required: ${Math.ceil(allUsingStone * increment)}`);
    console.log(`Marble required: ${Math.ceil(allUsingMarble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(allUsingLapis * increment)}`);
    console.log(`Gold required: ${Math.ceil(allUsingGold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(counter * increment)}`);
}

// thePyramidOfKingDjoser(11 , 1)
thePyramidOfKingDjoser(11 , 0.75)
// thePyramidOfKingDjoser(12 , 1)
// thePyramidOfKingDjoser(23 , 0.5)
// thePyramidOfKingDjoser(2 , 0.5)
// thePyramidOfKingDjoser(86 , 2.5)