function theLift(arrayAll){

    let peopleWaiting = Number(arrayAll[0]);
    let splitArray = arrayAll[1].split(' ');
    let arrayLength = splitArray.length;

    let isEmptyWagon = false;
    let isSpotsSpace = false;

    for(let q = 0; q < arrayLength; q++){

        let sizeWagon = splitArray[q];
        let isTempor = false;

        for(let n = sizeWagon; n < 4; n++){
            if(peopleWaiting === 0){
                if(n === 3){
                    isTempor = true;
                }
                isEmptyWagon = true;
                break;
            } else {
                sizeWagon++;
                peopleWaiting--;
            }
        }
        splitArray[q] = (sizeWagon);
        isSpotsSpace = isTempor;
    }

    if(isEmptyWagon){
        if(isSpotsSpace){
            console.log('The lift has empty space!')
            console.log(splitArray.join(' '))
        } else {
            console.log('The lift has empty spots!')
            console.log(splitArray.join(' '))
        }
        
    } else {
        if(!isEmptyWagon && peopleWaiting > 0){
            console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`)
            console.log(splitArray.join(' '))
        } else {
            console.log(splitArray.join(' '))
        }
    }
}

// theLift(["15","0 0 0 0 0"])
// theLift(["15","0 0 0 0"])
// theLift(["20","0 2 0"])
theLift(["12","0 0 0"])