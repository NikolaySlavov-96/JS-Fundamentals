function softUniBarIncome(arrc){

    let patterLetterSe = /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.\d]*(?<price>[0-9]+.[0-9]*)[$]/g;

    let totalPrice = 0;

    arrc.forEach(element => {
        if(element === 'end of shift'){
            return console.log(`Total income: ${totalPrice.toFixed(2)}`);
        }
        let results = element.matchAll(patterLetterSe);
        
        for (const line of results) {
            let quantity = Number(line.groups.quantity);
            let price = Number(line.groups.price)
            console.log(`${line.groups.name}: ${line.groups.product} - ${(price * quantity).toFixed(2)}`)
            totalPrice += (price * quantity);
        }
    })
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift'])

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift'])