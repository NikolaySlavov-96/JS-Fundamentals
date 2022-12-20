function buildAWall(wall){

    let wallLength = wall.length;

    let dayCounter = [];
    let allUsingConcrete = 0;

    let temporaryCounter = 0;

    for(let z = 1; z <= 30; z++){
        
        for(let n = 0; n < wallLength; n++){
            
            let checkWall = Number(wall[n]);
    
            if(checkWall < 30){
                temporaryCounter++;
                wall[n]++;
            }
        }
        if(temporaryCounter !== 0){
            let counterDays = temporaryCounter * 195;
            dayCounter.push(counterDays);
            allUsingConcrete += Number(counterDays);
            temporaryCounter = 0;
        }
    
    }
    console.log(dayCounter.join(`, `));

    let sumAllConcrete = (allUsingConcrete * 1900)

    console.log(`${sumAllConcrete} pesos`)
}

// buildAWall([21, 25, 28]);
// buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);