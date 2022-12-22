function pointsValidation(array){
    
    let index = 0;
    let x1 = array[index++];
    let y1 = array[index++];
    let x2 = array[index++];
    let y2 = array[index++];

    let formSum = formMathPow(x1 , y1 , x2 , y2);

    function formMathPow(x1 , y1 , x2 , y2){
        
        let result = [];
        
        for(let n = 0; n < 3; n++){
            let temporary = 0;
            if(n === 0){
                temporary = Math.sqrt(Math.pow(x1 , 2) + Math.pow(y1 , 2) - 0);
            } else if(n === 1){
                temporary = Math.sqrt(Math.pow(x2 , 2) + Math.pow(y2 , 2) - 0);
            } else if(n === 2){
                temporary = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
            }
            if(Number.isInteger(temporary)){
                result.push(true)
            } else {
                result.push(false)
            }
        }
        return result
    }

    for(let n = 0; n < formSum.length; n++){
        if(formSum[n]){
            switch(n){
                case 0: console.log(`{${x1}, ${y1}} to {0, 0} is valid`) ;break;
                case 1: console.log(`{${x2}, ${y2}} to {0, 0} is valid`) ;break;
                case 2: console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`) ;break;
            }
        } else {
            switch(n){
                case 0: console.log(`{${x1}, ${y1}} to {0, 0} is invalid`) ;break;
                case 1: console.log(`{${x2}, ${y2}} to {0, 0} is invalid`) ;break;
                case 2: console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`) ;break;
            }
        }
    }
}

// pointsValidation([3, 0, 0, 4])
pointsValidation([2, 1, 1, 1])