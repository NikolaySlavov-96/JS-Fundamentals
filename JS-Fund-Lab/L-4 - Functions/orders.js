function ordersPrint(nameDrink , quantityDrink){

let allPayPrice = productPrice(nameDrink)

    let finalPayPrice = allPayPrice * quantityDrink;

    function productPrice(nameDrink){

        let price = 0;

        switch(nameDrink) {
            case 'coffee': price = 1.50; break;
            case 'water': price = 1.00; break;
            case 'coke': price = 1.40; break;
            case 'snacks': price = 2.00; break;
        }

        return price;
    }

    return (finalPayPrice.toFixed(2));

}

let order = ordersPrint("coffee", 5)

console.log(order)