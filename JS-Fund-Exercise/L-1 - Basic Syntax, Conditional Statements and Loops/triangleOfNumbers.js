function triangleOfNumbers(borderNumber){

    for(let n = 1; n <= borderNumber; n++){
        let row = "";
        for(let q = 1; q <= n; q++){
            row += `${n} `;
        }
        console.log(row)
    }
}

triangleOfNumbers(3)