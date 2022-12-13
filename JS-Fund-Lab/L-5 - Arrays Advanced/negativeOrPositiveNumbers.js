function negativeOrPositiveNumbers(inpArr){

    
    let newResult = []; 
    for(let n = 0; n < inpArr.length; n++){
        
        if(inpArr[n] < 0){
            newResult.unshift(inpArr[n])
        } else {
            newResult.push(inpArr[n])
        }
    }

    for(let element of newResult){

        console.log(element)
    }

}

negativeOrPositiveNumbers(['7', '-2', '8', '9'])