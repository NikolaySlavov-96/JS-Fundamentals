function adAstra(inputArr){

    let line = inputArr.shift()
    let patternProduct = /(#|\|)(?<product>[A-Za-z ]+)\1(?<data>\d{2}\/\d{2}\/\d{2})\1(?<calories>[\d]+)\1/g;
    let totalCalories = 0;
    let printResut = [];

    let allInformationToTravel = line.matchAll(patternProduct);

    for(const line of allInformationToTravel){
        totalCalories += Number(line.groups.calories);
        printResut.push(line.groups)
    }

    let dayInSpace = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${dayInSpace} days!`)

    for (const lineProduct of printResut) {
        console.log(`Item: ${lineProduct.product}, Best before: ${lineProduct.data}, Nutrition: ${lineProduct.calories}`)
    }
}

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])