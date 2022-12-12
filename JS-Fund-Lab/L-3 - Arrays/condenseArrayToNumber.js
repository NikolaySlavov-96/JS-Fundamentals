function condenseArrayToNumber(array){

    let newArray = array;
    let isBigStop = true;

    if(newArray.length > 1){
        while(isBigStop){
            let temporaryArray = [];
            let lengthArray = newArray.length
            for(let n = 0; n < lengthArray - 1; n++){
                let temporary = newArray[0] + newArray[1];
                temporaryArray.push(temporary)
                newArray.shift();
            }
            newArray = temporaryArray;
            if(newArray.length < 2){
                isBigStop = false;
            }
        }
    } else {
        newArray = array;
    }
    console.log(newArray.join(` `))
}

// condenseArrayToNumber([2,10,3])
// condenseArrayToNumber([5,0,4,1,2])
condenseArrayToNumber([1])