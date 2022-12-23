function computerStore(arrayPricePart){

    let typeClient = arrayPricePart[arrayPricePart.length - 1];
    let lengthArray = arrayPricePart.length - 1;

    let counterPrice = 0;

    let isBoule = true;
    
    //add all sum in array 
    for(let q = 0; q < lengthArray; q++){
        if(arrayPricePart[q] < 0){
            console.log(`Invalid price!`)
        } else {
            counterPrice += Number(arrayPricePart[q]);
        }
    }

    //if not positive price in loop or print Invalid
    if(counterPrice === 0){
        console.log(`Invalid order!`)
        isBoule = false;
    }

    // out loop print price and text
    if(isBoule){
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${counterPrice.toFixed(2)}$`);
        console.log(`Taxes: ${((counterPrice.toFixed(2)) * 0.20).toFixed(2)}$`);
        let finalPrice = counterPrice + counterPrice * 0.20;
    
        // type client 
        if(typeClient === 'special'){
            //discount 10 %
            finalPrice *= 0.90;
        }
    
        //final print 
    
        console.log(`-----------`);
        console.log(`Total price: ${finalPrice.toFixed(2)}$`);
    }
}

// computerStore(['1050','200','450','2','18.50','16.86','special'])
// computerStore(['regular'])
computerStore(['1023', '15', '-20','-5.50','450', '20', '17.66', '19.30', 'regular'])