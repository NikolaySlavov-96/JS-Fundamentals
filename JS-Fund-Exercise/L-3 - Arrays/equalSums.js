function equalSums(array){

    let xCounter = array.length;
    let isBoolean = false;

    let finalNumber = 0;

    for(let n = 0; n < xCounter; n++){
        let sumLeft = 0;
        let sumRight = 0;
        for(let q = 0; q < n; q++){
            sumLeft += Number(array[q]);
        }
        for(let z = n + 1; z < xCounter; z++){
            sumRight += Number(array[z]);
        }if(sumLeft === sumRight){
            finalNumber = n;
            isBoolean = true;
            break;
        }
    }
    console.log(isBoolean ? finalNumber : `no`)
}

// equalSums([1])
equalSums([1, 2, 3, 3])


// equal left ot right side 