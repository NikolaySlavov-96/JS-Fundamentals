function storage(array){

    let storage = new Map();

    array.forEach(element => {
        let [productName , quantity] = element.split(` `);
        quantity = Number(quantity);

        if(storage.has(productName)){
            quantity += storage.get(productName);
        }
        storage.set(productName , quantity)
        
    });

    for(let [productName , quantity] of storage){
        console.log(`${productName} -> ${quantity}`)
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])