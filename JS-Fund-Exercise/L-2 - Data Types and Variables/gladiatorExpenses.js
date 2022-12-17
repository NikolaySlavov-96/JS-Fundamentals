function gladiatorExpenses(flight , helmet , sword , shield , armor){

    let flightLost = flight;
    let helmetPrice = helmet;
    let swordPrice = sword;
    let shieldPrice = shield;
    let armorPrice = armor;

    let counterFlight = 0;
    let counterShield = 0;

    let allPayRepair = 0;

    for(let n = 1; n <= flightLost; n++){
        counterFlight++;

        if(counterFlight % 2 === 0){
            allPayRepair += helmetPrice;
        }
        if(counterFlight % 3 === 0){
            allPayRepair += swordPrice;
        }
        if(counterFlight % 2 === 0 && counterFlight % 3 === 0){
            allPayRepair += shieldPrice;
            counterShield++;
            if(counterShield % 2 === 0){
                allPayRepair += armorPrice;
            }
        }
    }
    console.log(`Gladiator expenses: ${(allPayRepair).toFixed(2)} aureus`)
}

gladiatorExpenses(7,2,3,4,5)