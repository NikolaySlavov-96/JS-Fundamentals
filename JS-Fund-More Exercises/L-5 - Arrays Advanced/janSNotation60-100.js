function janSNotation(arr){

    let counterOperants = 0;
    let counterNumbers = 0;
    let result = arr[0]
    
    for(const element of arr){
        if(element === '+' || element === '-' || element === '*' || element === '/'){
            counterOperants++;
        } else {
            counterNumbers++;
        }
    }

    if((counterNumbers - 1) === counterOperants){
        for(let n = 0; n < arr.length; n++){
            if((arr[n] === '+' || arr[n]  === '-' || arr[n]  === '*' || arr[n]  === '/')) {
                switch(arr[n]){
                    case '+': result += arr[n - 1]; break;
                    case '-': result -= arr[n - 1]; break; 
                    case '*': result *= arr[n - 1]; break; 
                    case '/': result /= arr[n - 1]; break; 
                }
            }
        }
        console.log(result)
    } else if(counterNumbers === counterOperants){
        console.log(`Error: not enough operands!`)
    } else if(counterNumbers > (counterOperants - 1)){
        console.log(`Error: too many operands!`)
    }
    // console.log(counterNumbers)
    // console.log(counterOperants)
}

// janSNotation([-1,
//     1,
//     '+',
//     101,
//     '*',
//     18,
//     '+',
//     3,
//     '/'])

// janSNotation([31,
//     2,
//     '+',
//     11,
//     '/'])

janSNotation([5,
    3,
    4,
    '*',
    '-'])


// janSNotation([15,
//     '/'])

// janSNotation([7,
//     33,
//     8,
//     '-'])