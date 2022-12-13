function listOfProducts(arrProduct){

    let sortArr = arrProduct.sort();

    for(let n = 0; n < sortArr.length; n++){

        let printResult = sortArr[n];

        console.log(`${(n + 1)}.${printResult}`)
    }
}

// listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
// listOfProducts(['Watermelon', 'Banana', 'Apples'])
listOfProducts(['Watermelon', '43Banana', 'Apples'])