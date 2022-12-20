function NxNMatrix(number){

    for(let n = 0; n < number; n++){
        let rowPrint = '';
        for(let q = 0; q < number; q++){
           if(q === number - 1){
            rowPrint += number;
           } else {
            rowPrint += (`${number} `)
           }
        }
        console.log(rowPrint)
    }
}

NxNMatrix(7)