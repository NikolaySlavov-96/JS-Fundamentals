function wordOccurrences(arrayName){

    let quantityName = {};

    arrayName.forEach(element => {

        if(quantityName.hasOwnProperty(element)){
            quantityName[element] = quantityName[element] + 1;
        } else {
            quantityName[element] = 1;
        }
    });

    let sortedObj = Object.entries(quantityName)

    sortedObj.sort(([propA , valuA] , [propB , valueB]) => valueB - valuA);

    sortedObj.forEach(element => {

        let [word , quantuty] = element;

        console.log(`${word} -> ${quantuty} times`)
    })
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", 
"another", "sentence", "And", "finally", "the", "third", "sentence"])