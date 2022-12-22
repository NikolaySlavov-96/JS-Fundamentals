function pointsValidation(array){
    
    let index = 0;
    let x1 = array[index++];
    let y1 = array[index++];
    let x2 = array[index++];
    let y2 = array[index++];

    for(let n = 0; n < 3; n++){
        let temporary = 0;
        if(n === 0){
            temporary = Math.sqrt(Math.pow(x1 , 2) + Math.pow(y1 , 2) - 0);
            if(Number.isInteger(temporary)){
                console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
            } else {
                console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
            }
        } else if(n === 1){
            temporary = Math.sqrt(Math.pow(x2 , 2) + Math.pow(y2 , 2) - 0);
            if(Number.isInteger(temporary)){
                console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
            } else {
                console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
            }
        } else if(n === 2){
            temporary = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
            if(Number.isInteger(temporary)){
                console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
            } else {
                console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
            }
        }
    }
}

// pointsValidation([3, 0, 0, 4])
pointsValidation([2, 1, 1, 1])