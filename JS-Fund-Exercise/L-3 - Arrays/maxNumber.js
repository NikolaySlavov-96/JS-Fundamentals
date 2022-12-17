function maxNumber(array){

    let counter = array.length;

    let isBoouleand = false;

    let sumPrint = [];

    let maxNumberResult = 0;

    for(let q = 0; q < counter; q++){
        if(array[q] > maxNumberResult){
            maxNumberResult = array[q];
            isBoouleand = true;
        }
    }
    for(let n = 0; n <= counter; n++){
        if(array[n] === maxNumberResult){
            isBoouleand = false;
        }
        if(!isBoouleand){
            if(array[n] > array[n + 1]){
                sumPrint += (`${array[n]} `)
            } else if (array[n] === undefined){
                sumPrint += (`${array[n - 1]} `)
            }
        }
    }
    console.log(sumPrint)
}

maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([27, 19, 42, 2, 13, 45, 48])