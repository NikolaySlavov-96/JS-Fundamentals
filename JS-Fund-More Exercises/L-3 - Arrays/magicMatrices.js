function magicMatrices(array){

    let arrLength = array.length;
    let newArr = [];
    let counter = 0;
    let isBoolean = false;

    for(let n = 0; n < arrLength; n++){
        let temporaryArr = array[n];
        let tempSum = 0;
        for(let z = 0; z < arrLength; z++){
            tempSum += Number(temporaryArr[z]);
        }
        newArr.push(tempSum);
    }

    for(let a = 0; a < newArr.length - 1; a++){
        let current = newArr[a];
        let nextArr = newArr[a + 1];

        if(current === nextArr){
            counter++
        }
    }

    if(counter === (newArr.length - 1)){
        isBoolean = true;
    }

    console.log(isBoolean)
}

magicMatrices([[4, 5, 6],[6, 5, 4],[5, 5, 5]])
// magicMatrices([[11, 32, 45],[21, 0, 1],[21, 1, 1]])

// magicMatrices([[4, 5, 6],[7, 7, 7],[5, 5, 5]])
