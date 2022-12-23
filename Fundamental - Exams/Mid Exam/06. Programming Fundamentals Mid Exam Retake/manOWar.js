function manOWar(arrayInput){

    let pirateShipHealth = arrayInput.shift().split(`>`);
    let battleShipHealth = arrayInput.shift().split(`>`);
    let maxHealthCapacity = Number(arrayInput.shift());
    let commands = arrayInput.shift();

    let isStop = false;

    while(commands !== 'Retire'){

        if(isStop){
            break;
        }
        
        let [definition , index , damageIndex , damage] = commands.split(` `);

        switch(definition){
            case 'Fire': fires(battleShipHealth , index , damageIndex); break;
            case 'Defend': defends(pirateShipHealth , index , damageIndex , damage); break;
            case 'Repair':  repairs(pirateShipHealth , index , damageIndex , maxHealthCapacity); break;
            case 'Status': statusShip(pirateShipHealth , maxHealthCapacity); break;
        }

        commands = arrayInput.shift();
    }

    function fires(battleShip , index , damage){

        if(battleShip[index]){
            battleShip[index] -= Number(damage);
            if(battleShip[index] <= 0){
                isStop = true;
                console.log(`You won! The enemy ship has sunken.`)
            }
        }
    }

    function defends(pirateShip , startIndex , endIndex , damage){

        if(pirateShip[startIndex] && pirateShip[endIndex]){
            for(let n = startIndex; n <= endIndex; n++){
                pirateShip[n] -= Number(damage);
                if(pirateShip[startIndex] <= 0){
                    isStop = true;
                    console.log(`You lost! The pirate ship has sunken.`);
                    pirateShip.splice(n , 1);
                }
            }
        }
    }

    function repairs(pirateShip , index , health , maxHealth){

        if(pirateShip[index]){
            if((pirateShip[index] + Number(health)) <= maxHealth){
                pirateShip[index] += Number(health);
            } else {
                pirateShip[index] = maxHealth;
            }
        }
    }

    function statusShip(pirateShipHealth , maxHealth){

        let countSection = 0;
        for (const ship of pirateShipHealth) {
            let percent = (ship / maxHealth) * 100;
            if(percent < 20){
                countSection++;
            }
        }
        console.log(`${countSection} sections need repair.`)
    }

    function calculate(array){
        
        let result = 0;

        for (const counter of array) {
            let numberCounter = Number(counter);
            result += numberCounter;
        }
        return result;
    }

    if(!isStop){
        console.log(`Pirate ship status: ${calculate(pirateShipHealth)}`)
        console.log(`Warship status: ${calculate(battleShipHealth)}`)
    }
}
manOWar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])
// manOWar(["2>3>4>5>2",
// "6>7>8>9>10>11",
// "20",
// "Status",
// "Fire 2 3",
// "Defend 0 4 11",
// "Repair 3 18",
// "Retire"])
