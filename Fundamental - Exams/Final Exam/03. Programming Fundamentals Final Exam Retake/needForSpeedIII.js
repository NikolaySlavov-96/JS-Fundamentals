function needForSpeedIII(arrInput){

    let quatityCars = arrInput.shift();
    let garageStore = {};
    
    for (const line of arrInput) {

        if(line === 'Stop') {
            printGarage();
            break;
        }

        if(line.includes(`|`)){
            let [mark , kilometers , liter] = line.split(`|`);
            liter = Number(liter)
            if(!garageStore.hasOwnProperty(mark)){
                garageStore[mark] = {kilometers , liter};
            }
        } else if(line.includes(`:`)){
            let [comm , nameCar , dfk , fuel] = line.split(` : `);

            switch(comm){
                case 'Drive': drives(nameCar , dfk , fuel); break;
                case 'Refuel': refuels(nameCar , dfk); break;
                case 'Revert': reverts(nameCar , dfk); break;
            }
        }
    }

    function drives(carName , distance , fuel){
        distance = Number(distance)
        let checkFuels = garageStore[carName].liter
        if(checkFuels > fuel){
            let temporKilom = Number(garageStore[carName].kilometers)
            temporKilom += distance;
            garageStore[carName].kilometers = temporKilom;
            garageStore[carName].liter -= fuel;
            console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
        } else {
            console.log(`Not enough fuel to make that ride`)
        }

        let checkDistance = garageStore[carName].kilometers;
        checkDistance = Number(checkDistance)
        if(checkDistance >= 100000){
            console.log(`Time to sell the ${carName}!`);
            delete garageStore[carName];
        }
    }

    function refuels(carName , fuel){
        fuel = Number(fuel)
        let checkFuel = garageStore[carName].liter;
        let quantityRefuel = 0;

        if(checkFuel + fuel <= 75){
            quantityRefuel = fuel;
        } else {
            quantityRefuel = 75 - checkFuel;
        }

        garageStore[carName].liter += quantityRefuel

        console.log(`${carName} refueled with ${quantityRefuel} liters`)
    }

    function reverts(carName , amountReverted){

        garageStore[carName].kilometers -= amountReverted;
        
        if(garageStore[carName].kilometers <= 10000){
            garageStore[carName].kilometers = 10000;
            return;
        }
        console.log(`${carName} mileage decreased by ${amountReverted} kilometers`)
    }

    function printGarage(){
            
        // {car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt.

        for (const cars in garageStore) {
            console.log(`${cars} -> Mileage: ${garageStore[cars].kilometers} kms, Fuel in the tank: ${garageStore[cars].liter} lt.`)
        }
    }
}

// needForSpeedIII([
//     '3',
//     'Audi A6|38000|62',
//     'Mercedes CLS|11000|35',
//     'Volkswagen Passat CC|45678|5',
//     'Drive : Audi A6 : 543 : 47',
//     'Drive : Mercedes CLS : 94 : 11',
//     'Drive : Volkswagen Passat CC : 69 : 8',
//     'Refuel : Audi A6 : 50',
//     'Revert : Mercedes CLS : 500',
//     'Revert : Audi A6 : 30000',
//     'Stop'
//   ])
// needForSpeedIII([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
//   ])
// needForSpeedIII([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Refuel : Lamborghini Veneno : 40',
//     'Stop'
//   ])


  // check drives() quantity fuel > or =>
  // check drives() distanc Sell Car => 