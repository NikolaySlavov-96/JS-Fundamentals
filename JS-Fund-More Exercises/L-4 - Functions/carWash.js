function carWash(arrayOfCommand){

    let arrayLength = arrayOfCommand.length;
    let result = 0;

    let soapFn = () => 10;
    let waterFn = (result) => result * 0.2;
    let vacuumCleanerFn = (result) => result * 0.25 ;
    let mudFn = (result) => result * 0.10;
 
    for(let n = 0; n < arrayLength; n++){

        if(arrayOfCommand[n] === 'soap'){
            result += soapFn();
        } else if(arrayOfCommand[n] === 'water'){
            result += waterFn(result);
        } else if(arrayOfCommand[n] === 'vacuum cleaner'){
            result += vacuumCleanerFn(result);
        } else if(arrayOfCommand[n] === 'mud'){
            result -= mudFn(result);
        }
    }
    
    return (`The car is ${result.toFixed(2)}% clean.`)
}   

console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']))