function theBiscuitFactory(array){

    let index = 0;
    let biscuitsPerOnePeople = Number(array[index++]);
    let peopleWorks = Number(array[index++]);
    let target = Number(array[index++]);

    let finalPrintSum = 0;

    for(let n = 1; n <= 30; n++){

        if(n % 3 === 0){
            finalPrintSum += (Math.floor((biscuitsPerOnePeople * peopleWorks) * 0.75));
        } else {
            finalPrintSum += biscuitsPerOnePeople * peopleWorks;
        }
    }

    console.log(`You have produced ${finalPrintSum} biscuits for the past month.`);

    if(target < finalPrintSum){
        let mau = finalPrintSum - target;
        let printSum = (mau / target) * 100;
        console.log(`You produce ${printSum.toFixed(2)} percent more biscuits.`)
    } else {
        let mau = target - finalPrintSum;
        let printSum = (mau / target) * 100;
        console.log(`You produce ${printSum.toFixed(2)} percent less biscuits.`)
    }
}

// theBiscuitFactory(['78' , '8' , '16000']);
theBiscuitFactory(['65' , '12' , '26000']);