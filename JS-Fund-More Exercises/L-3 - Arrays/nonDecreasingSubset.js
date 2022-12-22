function nonDecreasingSubset(data){

    let arrLength = data.length;

    let finalPrint = [];

    for(let n = 0; n < arrLength; n++){
        let isBig = false;
        if((data[n - 1] < data[n]) || n === 0){
            if(n !== 0){
                for(let q = 0; q < finalPrint.length; q++){
                    if(finalPrint[q] > data[n]){
                        isBig = true;
                    }
                }
            } else if(n === 0){
                finalPrint.push(data[n])
            }
            if(!isBig && n !== 0){
                finalPrint.push(data[n])
            }
        }
    }
    console.log(finalPrint.join(' '))
}

// nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
// nonDecreasingSubset([ 1, 2, 3, 4]);
// nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);
// nonDecreasingSubset([ 24, 3, 2, 25, 6, 25]);
nonDecreasingSubset([]);