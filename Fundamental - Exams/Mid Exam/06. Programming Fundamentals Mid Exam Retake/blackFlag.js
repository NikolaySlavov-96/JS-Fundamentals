function blackFlag(array){

    const dayPlunders = Number(array[0]);
    const dailyTarget = Number(array[1]);
    const expectedPlunder = Number(array[2]);

    let totalResult = 0;

    for(let n = 1; n <= dayPlunders; n++){

        totalResult += dailyTarget;
        
        if(n % 3 === 0){
            totalResult += dailyTarget * 0.50;
        }
        
        if(n % 5 === 0){
            totalResult *= 0.70;
        }
    }

    if(expectedPlunder <= totalResult){
        console.log(`Ahoy! ${(totalResult).toFixed(2)} plunder gained.`)
    } else {
        let percent = (totalResult / expectedPlunder) * 100;
        console.log(`Collected only ${(percent).toFixed(2)}% of the plunder.`)
    }
}

blackFlag(["5","40","100"]);
blackFlag(["10","20","380"]);