function dungeonestDark(room){
    
    let gameArray = room[0].split('|');
    let lengthArray = gameArray.length;

    let health = 100;
    let chestBox = 0;
    let qualityRoom = 0;

    let isStopGame = false;

    for(let n = 0; n < lengthArray; n++){
        let temporary = gameArray[n].split(' ')
        let printFight = '';
        qualityRoom++;
        switch(temporary[0]){
            case 'potion': 
                if((health + Number(temporary[1])) > 100){
                    temporary[1] = (100 - health)
                }
            printFight = (`You healed for ${temporary[1]} hp.`); 
            printFight += (`\nCurrent health: ${health + Number(temporary[1])} hp.`)
            health += Number(temporary[1]);
            break;
            case 'chest': 
                printFight = (`You found ${temporary[1]} coins.`); 
                chestBox += Number(temporary[1])
            break;
            default: 
                if((health - Number(temporary[1])) > 0){
                    printFight = (`You slayed ${temporary[0]}.`); 
                    health -= Number(temporary[1]);
                } else {
                    console.log(`You died! Killed by ${temporary[0]}.`)
                    health -= Number(temporary[1]);
                    isStopGame = true;
                }
            break;
        }
        if(isStopGame){
            break;
        } else {
            console.log(printFight)
        }
    }
    if(isStopGame){
        console.log(`Best room: ${qualityRoom}`)
    } else {
        console.log(`You've made it!`);
        console.log(`Coins: ${chestBox}`);
        console.log(`Health: ${health}`);
    }
}

// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])