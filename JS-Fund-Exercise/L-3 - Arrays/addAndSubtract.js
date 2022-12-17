function addAndSubtract(number){

    let modify = [ ];
    let sumOriginalArray = 0;
    let sumModifyArray = 0;

    let arraySum = number.length;

    for(let num = 0; num < arraySum; num++){
        if(number[num] % 2 === 0){
            let averageOrigin = Number(number[num]);
            if(num === arraySum - 1){
                modify += (`${(number[num] + num)} `)
            } else {
                modify += (`${(number[num] + num)}, `)
            }
            let averageModifay = Number(number[num] + num);
            sumOriginalArray += averageOrigin;
            sumModifyArray += averageModifay;
            
        } else {
            let averageOrigin = Number(number[num]);
            if(num === arraySum - 1){
                modify += (`${(number[num] - num)} `);
            } else {
                modify += (`${(number[num] - num)}, `);
            }
            let averageModifay = Number(number[num] - num);

            sumOriginalArray += averageOrigin;
            sumModifyArray += averageModifay;
        }
    }
    console.log(`[ ${modify}]`);
    console.log(sumOriginalArray);
    console.log(sumModifyArray);
}

addAndSubtract([5, 15, 23, 56, 35])