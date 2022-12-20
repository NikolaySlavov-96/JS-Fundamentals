function perfectNumber(number){

    let result = calculate(number);
    
    function calculate(number){

        let allNumber = ''
        let sumOfNumber = 0;

        for(let n = 0; n < number; n++){
            if(number % n === 0 && n !== number){
                allNumber += (`${n} `);
                sumOfNumber += Number(n)
            }
        }
        
        if(number === sumOfNumber){
            return true;
        } else {
            return false;
        }
    }
    
    if(result){
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
}

perfectNumber(28)