function counterStrike(array){
    
    let beginEnergy = Number(array.shift());

    let counterWonBattle = 0;

    for (const command of array){
        if(command !== 'End of battle'){
            if(beginEnergy - command < 0) {
                return (`Not enough energy! Game ends with ${counterWonBattle} won battles and ${beginEnergy} energy`)
            }
            beginEnergy -= command;
            counterWonBattle++;
            
        } else {
            return (`Won battles: ${counterWonBattle}. Energy left: ${beginEnergy}`)
        }
        if(counterWonBattle % 3 === 0){
            beginEnergy += counterWonBattle;
        }
    }
}

console.log(counterStrike(["100","10","10","10","1","2","3","73","10"]));

console.log(counterStrike(["100","10","10","10","1","2","3","72","10"]));

console.log(counterStrike(["200","54","14","28","13","End of battle"]));

console.log(counterStrike(["200","54","14","28","107","End of battle"]));