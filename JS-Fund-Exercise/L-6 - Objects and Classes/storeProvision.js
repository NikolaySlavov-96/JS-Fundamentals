function storeProvision(store , delivery){

    let storeStock = {};

    for(let n = 0; n < store.length; n+= 2){
        const product = store[n]
        const productQuantity = Number(store[n + 1])
        storeStock[product] = productQuantity;
    }

    for(let q = 0; q < delivery.length; q+= 2){
        const product = delivery[q];
        const productQuantity = Number(delivery[q + 1]);

        if(!storeStock.hasOwnProperty(product)){
            storeStock[product] = 0;
        }
        storeStock[product] += productQuantity;
    }
    for (const line in storeStock) {
        console.log(`${line} -> ${storeStock[line]}`) 
        
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])