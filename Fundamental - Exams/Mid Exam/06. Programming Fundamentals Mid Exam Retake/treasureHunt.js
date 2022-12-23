function treasureHunt(inputArray){

    // coolect input 
    let chest = inputArray.shift().split(`|`);
    let commandArray = inputArray.shift();

    while(commandArray !== 'Yohoho!'){

        let begin = commandArray.split(` `);

        let command = begin[0];
        let afterCommand = begin[1];

        switch(command){
            case 'Loot': loops(chest , begin); break;
            case 'Drop': drops(chest , afterCommand); break;
            case 'Steal': steals(chest , afterCommand); break;
        }

        commandArray = inputArray.shift();
    }

    // print data;
    let chestLen = Number(chest.length);

    if(chestLen > 0){
        let average = sizeArr(chest , chestLen);
        let matIteration = average / chestLen;
        console.log(`Average treasure gain: ${matIteration.toFixed(2)} pirate credits.`)
    } else {
        console.log(`Failed treasure hunt.`)
    }


    function loops(chest , beginCommand){
        //loot --> add element in first index if don't exists.
        let command = beginCommand;
        let commandLength = beginCommand.length;
        
        for(let n = 1; n < commandLength; n++){

            if(!chest.includes(command[n])){
                chest.unshift(command[n]);
            }
        }
    }

    function drops(chest , command){
        // drop --> remote current positions and add last element.

        let chestLength = chest.length;

        if(command >= 0 && command < chestLength){

            let temporary = chest[command];

            chest.splice(command , 1);
            chest.push(temporary);
        }
    }

    function steals(chest , command){
        // steal --> 
        let chestLength = chest.length;

        if(command > chestLength){
            command = chestLength;
        }

        let print = chest.splice((chestLength - command) , command).join(`, `);

        console.log(print)
    }

    function sizeArr(chest , chestLength){

        let counter = 0;

        for(let n = 0; n < chestLength; n++){

            counter += chest[n].length;

        }

        return counter
    }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])
