function magicMatrices(array){

    let arrLength = array.length;
    let newArr = [];
    let isBoolean = false;

    for(let n = 0; n < arrLength - 1; n++){
        let temporaryFirstArr = array[n];
        let temporarySecondArr = array[n + 1];
        for(let z = 0; z < arrLength; z++){
            for(let r = 0; r < arrLength; r++){
                if(temporaryFirstArr[z] === temporarySecondArr[r]){
                    if(n === 0){
                        newArr.push(temporaryFirstArr[z]);
                    } else if(n !== 0 && newArr.includes(temporaryFirstArr[z])){
                        newArr.push(temporaryFirstArr[z]);
                    }

                    if(n === (arrLength - 2) && newArr.includes(temporaryFirstArr[r])){
                        isBoolean = true;
                    }
                }
            }
        }
    }
    console.log(isBoolean)
}

// magicMatrices([[4, 5, 6],[6, 5, 4],[5, 5, 5]])
// magicMatrices([[11, 32, 45],[21, 0, 1],[21, 1, 1]])

magicMatrices([[4, 5, 6],[7, 7, 7],[5, 5, 5]])
