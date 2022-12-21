function oddOccurrences(elements){

    let arrOfElements = elements.split(` `).map(wor => wor.toLowerCase());
    let counterElements = {};

    arrOfElements.forEach(element => {
        
        if(!counterElements.hasOwnProperty(element)){
            counterElements[element] = [];
        }
        counterElements[element].push(1);
    });

    for (const line in counterElements) {
        counterElements[line] = counterElements[line].length;
    }

    let sortedObj = Object.entries(counterElements).sort((a , b) => b[1] - a[1])

    let printName = '';
    
    sortedObj.forEach(elements => {

        if(elements[1] % 2 !== 0){
            printName += (`${elements[0]} `)
        }
    })
    console.log(printName)
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')