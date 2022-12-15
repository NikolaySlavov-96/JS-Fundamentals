function rounding(number, precision){

    if(precision >= 15){
        precision = 15;
    }
    let middleSum = number.toFixed(precision);

    console.log(parseFloat(middleSum));
}

rounding(10.5,3)