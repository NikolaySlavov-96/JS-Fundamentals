function lastKNumbersSequance(limitPrint , numberMultiply){

    let finalResult = [1];

    for(let q = 1; q < limitPrint; q++){

        let points = Math.max(finalResult.length - numberMultiply, 0);

        let finalElement = finalResult.slice(points);
        let sum = 0;

        for(let snn of finalElement){
            sum += snn;
        }
        finalResult.push(sum);
    }
    console.log(finalResult.join(` `))
}

lastKNumbersSequance(6, 3)