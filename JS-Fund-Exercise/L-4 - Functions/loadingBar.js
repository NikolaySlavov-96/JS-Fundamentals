function loadingBar(percent){

    let resultLoading = symbolLoading(percent)
    let print = '';

    function symbolLoading(percentNumber){

        let resultLoading = '';
        for(let n = 0; n < 10; n++){
            if(percentNumber > (n * 10) && percentNumber !== 100){
                resultLoading += '%';
            } else if(percentNumber === 100) {
                return true;
            } else {
                resultLoading += '.';
            }
        }
        return resultLoading;
    }
    if(resultLoading === true){
        print = (`${percent}% Complete!`);
    } else {
        print = (`${percent}% [${resultLoading}]\nStill loading...`);
    }

    return print;
}

let hower = loadingBar(90)

console.log(hower)