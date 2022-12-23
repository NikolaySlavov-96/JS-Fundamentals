function movingTarget(array){

    let arrayShooting = array.shift().split(` `).map(Number);
    let command = array;

    let printResult = [];


    while(command !== 'End'){

        let [borderCommand , indexCommand , quantity] = command.shift().split(` `)
        let numberQuantity = Number(quantity);
        let numberIndex = Number(indexCommand);
        
        switch(borderCommand){
            case 'Shoot': 
                if(arrayShooting[numberIndex]){
                    arrayShooting[numberIndex] -= numberQuantity;
                } 
                if(arrayShooting[numberIndex] <= 0) {
                    arrayShooting.splice(numberIndex , 1);
                }
                // if(numberIndex < arrayShooting.length && numberIndex >= 0){
                // } когато добавяш повече от колкото е условието вадиш 80/100
            break;
            case 'Add':
                if(numberIndex < arrayShooting.length && numberIndex >= 0){
                    arrayShooting.splice(numberIndex , 0 , numberQuantity);
                } else {
                    console.log(`Invalid placement!`)
                }
            break;
            case 'Strike':
                let ability = ((numberQuantity * 2) + 1);
                let indexCut = (numberIndex - numberQuantity);
                let arrayShootLength = arrayShooting.length;
                
                if(ability < arrayShootLength && indexCut >= 0){
                    arrayShooting.splice(indexCut , ability);
                } else {
                    console.log(`Strike missed!`)
                }
            break;
            case 'End':
                for (const element of arrayShooting) {
                    let temporary = Number(element);
                    printResult.push(temporary);
                }
            break;
        }
        if(borderCommand === 'End'){
            break;
        }
    }
    console.log(printResult.join(`|`))
}

movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 456 3",
"End"]);