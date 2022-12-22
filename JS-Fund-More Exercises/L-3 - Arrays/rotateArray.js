function rotateArray(arrays){

    let limitRotate = (arrays[arrays.length - 1]);
    arrays.pop();
    let newArray = arrays;
    
    for(let n = 0; n < limitRotate; n++){

        let temporary = newArray.pop();
        newArray.unshift(temporary);

    }
    console.log(newArray.join(' '))
}

// rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])