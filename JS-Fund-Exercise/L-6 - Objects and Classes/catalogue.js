function catalogue(arrProducts){

    let firstWordObj = {};
    let productsObj = {};

    arrProducts.forEach(element => {
        let [name , price] = element.split(` : `)

        firstWordObj[name[0]] = '';
        productsObj[name] = price;

    });

    let sortWord = Object.entries(firstWordObj);
    sortWord.sort(([keyA] , [keyB]) => keyA.localeCompare(keyB));

    let sortProduct = Object.entries(productsObj);
    sortProduct.sort(([keyA , valieA] , [keyB , valueB]) => keyA.localeCompare(keyB));

    for(let n = 0; n < sortWord.length; n++){
        let [word] = sortWord[n];

        console.log(word);
        sortProduct.forEach(product => {
            let [name , price] = product;
            if(name[0] == (word)){
                console.log(`  ${name}: ${price}`)
            }
        })

    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);