function coffeeLover(coffeeArray){

    let coffeeLine = coffeeArray.shift().split(` `);
    let commandLength = Number(coffeeArray.shift());

    for(let n = 0; n < commandLength; n++){

        let receivingCommand = coffeeArray.shift().split(` `);

        let [comma , element , quantity] = receivingCommand;

        switch(comma){
            case 'Include': including(coffeeLine , element) ; break;
            case 'Remove': removing(coffeeLine , element , quantity) ; break;
            case 'Prefer': preferring(coffeeLine , element , quantity) ; break;
            case 'Reverse': reversing(coffeeLine) ; break;
        }
    }

    function including(list , elementAdd){

        list.push(elementAdd);
    }

    function removing(list , element , quantity){

        if(list.length >= quantity){
            switch(element){
                case 'first': 
                    list.splice(0 , quantity); 
                break;
                case 'last': 
                    let indexBegin = list.length - quantity;
                    list.splice(indexBegin , quantity);
                break;
            }
        }
    }

    function preferring(list , first , last){

        let firstIndex = Number(first);
        let lastIndex = Number(last);

        let firstCoffee = list[firstIndex];
        let lastCoffee = list[lastIndex];

        list[firstIndex] = lastCoffee;
        list[lastIndex] = firstCoffee;
    }

    function reversing(list){
        list.reverse();
    }
    console.log(`Coffees:`)
    console.log(coffeeLine.join(` `))
}

coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
"5",
"Include TurkishCoffee",
"Remove first 2",
"Remove last 1",
"Prefer 3 1",
"Reverse"])
