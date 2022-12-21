function furniture(array){

    let patternLeter = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d*.\d+)!(?<quantity>\d+)/g;
    let totalPay = 0;

    console.log(`Bought furniture:`);

    array.forEach(element => {
        let result = element.matchAll(patternLeter);
        for (const line of result) {
            console.log(line.groups.name)
            let temporaryPrice = line.groups.price;
            let temporaryQuantity = line.groups.quantity;

            totalPay += (temporaryPrice * temporaryQuantity);
        }
    });

    console.log(`Total money spend: ${totalPay.toFixed(2)}`)
}

furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])