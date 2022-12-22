function garage(inputArr){

    let garageObj = new Map();

    for (const line of inputArr) {

        let [numberGarage , allInfor] = line.split(` - `);

        let freeCars = [];

        if(!garageObj.has(numberGarage)){
            freeCars.push(allInfor)
        } else {
            freeCars = garageObj.get(numberGarage);
            freeCars.push(allInfor);
        }
        garageObj.set(numberGarage , freeCars);
    }

    let sortedGarage = [...garageObj.entries()];

    let printResutl = '';

    for (const [curentNumberGarage , currentInfo] of sortedGarage) {
        printResutl += (`Garage № ${curentNumberGarage}\n`);

        for(let currentCar of currentInfo){

            for (let everySymbol of currentCar) {
                currentCar = currentCar.replace(': ', ' - ')
            }

            printResutl += (`--- ${currentCar}\n`)
        }
    }
    console.log(printResutl)
}

garage(['1 - color: blue, fuel type: diesel',
'1 - color: red, manufacture: Audi',
'2 - fuel type: petrol',
'4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])