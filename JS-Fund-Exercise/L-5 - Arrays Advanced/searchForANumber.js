function searchForANumber(arrSearch , condition){

    let createArr = condition[0];
    let removeArr = condition[1];
    let magicNumber = condition[2];

    let copyArrFirst = arrSearch.slice(0)

    let second = copyArrFirst.slice(0 , createArr)
    second.splice(0, removeArr);

    let counter = 0;

    for(let n = 0; n < second.length; n++){
        if(second[n] === magicNumber){
            counter++;
        }
    }

    console.log(`Number ${magicNumber} occurs ${counter} times.`)
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])