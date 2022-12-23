function manOWar(input){
    let firstShipStatus = input.shift().split('>');
    let warShipStatus = input.shift().split('>');
    let maxHealth = input.shift();
    let index = 0;
    let command = input[index++].split(' ');
    let action = command[0];
 
    let percentOfMaxHelth = maxHealth * 0.2;
    let isStalemate = false;
    let pirateWin = false;
    let warShipWin = false;
 
    loop1:
    while(action !== 'Retire'){
 
        switch(action){
            case 'Fire':
                let ComIndex = Number(command[1]);
                let damage = Number(command[2]);
                let warShipIndexses = warShipStatus.length - 1;
                if(ComIndex >= 0 && ComIndex <= warShipIndexses){
                    let sectionAfterDm = warShipStatus[ComIndex] - damage;
                    warShipStatus[ComIndex] = sectionAfterDm;
                    if(sectionAfterDm <= 0){
                        pirateWin = true;
                        warShipWin = false;
                        console.log(`You won! The enemy ship has sunken.`);
                        break loop1;
                    }
                } break;
 
            case 'Defend':
                let startIndex = Number(command[1]);
                let endIndex = Number(command[2]);
                let demage = Number(command[3]);
                let validIndexesPirate = firstShipStatus.length - 1;
                let isSink = false;
                if(startIndex >= 0 && endIndex <= validIndexesPirate){
                    for(let i = startIndex; i <= endIndex; i++){
                        let sectionAfterDm = firstShipStatus[i] - demage;
                        firstShipStatus[i] = sectionAfterDm;
                        if(sectionAfterDm <= 0){ isSink = true; }
                    }
                    if(isSink){console.log('You lost! The pirate ship has sunken.'); pirateWin = false; warShipWin = true;}    
                } break;
 
            case 'Repair':
                let indexOfSectionToBeHealed = Number(command[1]);
                let healthToBeAdded = Number(command[2]);
                let validIndexses = firstShipStatus.length - 1;
                if(indexOfSectionToBeHealed >= 0 && indexOfSectionToBeHealed <= validIndexses){
                    let sectionHealthAfterHealing = firstShipStatus[indexOfSectionToBeHealed] + healthToBeAdded;
                    if(sectionHealthAfterHealing <= maxHealth){
                        firstShipStatus[indexOfSectionToBeHealed] = sectionHealthAfterHealing;
                    } else{
                        firstShipStatus[indexOfSectionToBeHealed] = maxHealth;
                    }
                } break;
 
            case 'Status':
                let count = 0;
                for(let i = 0; i < firstShipStatus.length; i++){
                    let tempSectionHealth = Number(firstShipStatus[i]);
                    if(tempSectionHealth < percentOfMaxHelth){
                        count++;
                    }
                }
                console.log(`${count} sections need repair.`);
                break;
        }
        command = input[index++].split(' ');
        action = command[0];
    }
 
    if(!pirateWin && !warShipWin){
        let statusPirate = 0;
        let statusWarShip = 0;
        for(let i = 0; i < firstShipStatus.length; i++){
            let segmentHelth = Number(firstShipStatus[i]);
            statusPirate += segmentHelth;
        }
        for(let i = 0; i < warShipStatus.length; i++){
            let segmentHelth = Number(warShipStatus[i]);
            statusWarShip += segmentHelth;
        }
        console.log(`Pirate ship status: ${statusPirate}`);
        console.log(`Warship status: ${statusWarShip}`);
        
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