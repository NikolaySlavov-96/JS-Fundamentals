function magicSum(array , magicNumber){

    let counter = array.length;
    let sumNumber = '';

    for(let n = 0; n < counter; n++){
        for(let q = n + 1; q < counter; q++){
            if(array[n] + array[q] === magicNumber){
                sumNumber += (`${array[n]} ${array[q]} \n`)
            }
        }
    }
    console.log(sumNumber)
}

// magicSum([14, 20, 60, 13, 7, 19, 8],27)
magicSum([1, 2, 3, 4, 5, 6],6)