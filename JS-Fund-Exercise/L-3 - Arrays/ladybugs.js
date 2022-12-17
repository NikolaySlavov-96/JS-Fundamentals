function ladybugs(array){
    
    let sizeField = array.shift();
    let startPosition = array.shift().split(` `).map(Number);
    let sizeArray = [];
    let commands = array

    for(let n = 0; n < sizeField; n++){
        sizeArray.push(0);
    }

    for(let q = 0; q < sizeField; q++){

        let ladyBugsPosition = startPosition[q];
        if(ladyBugsPosition >= 0 && ladyBugsPosition < sizeField){
            sizeArray[ladyBugsPosition] = 1;
        }
    }


    for (const command of commands) {
        let [currentPos , direction , steps] = command.split(` `);
        currentPos = Number(currentPos);
        steps = Number(steps);

        if(sizeArray[currentPos] !== 1 || currentPos < 0 || currentPos >= sizeArray.length){
            continue;
        }

        if(steps < 0){
            steps = Math.abs(steps);
            if(direction === 'right'){
                direction = 'left';
            } else if(direction = 'left') {
                direction = 'right';
            }
        }
        
        sizeArray[currentPos] = 0;
        switch(direction){
            case 'left': 
                let newPosition = currentPos - steps;
                if(sizeArray[newPosition] === 1){
                    newPosition = newPosition - steps;
                }
                if(newPosition >= 0){
                    sizeArray[newPosition] = 1;
                }
            break;
            case 'right':
                let newPositions = currentPos + steps;
                if(sizeArray[newPositions] === 1){
                    newPositions = newPositions + steps;
                } 
                if(newPositions <= sizeArray.length){
                    sizeArray[newPositions] = 1;
                }
            break;
        }
    }

    console.log(sizeArray.join(` `))
}

// ladybugs([ 3, '0 1',
// '0 right 1',
// '2 right 1' ]
// )
// ladybugs([ 3, '0 1 2',
// '0 right 1',
// '1 right 1',
// '2 right 1']
// )
ladybugs([ 5, '3',
'3 left 2',
'1 left -2']
)