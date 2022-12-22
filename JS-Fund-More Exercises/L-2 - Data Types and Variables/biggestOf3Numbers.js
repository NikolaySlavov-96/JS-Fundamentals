function biggestOf3Numbers(first , second , third){

    let sum = Array(first , second , third)
    let len = sum.length;

    let finalPrints = Number.MIN_SAFE_INTEGER;

    for(let q = 0; q < len; q++){
        if(finalPrints < sum[q]){
            finalPrints = sum[q];
        }
    }

    console.log(finalPrints)
}

biggestOf3Numbers(-2,
    7,
    3
    )