function division(numbers){

    let result = 0;

    if(numbers % 10 === 0){
        result = 10;
    } else if(numbers % 7 === 0){
        result = 7;
    } else if(numbers % 6 === 0){
        result = 6;
    } else if(numbers % 3 === 0){
        result = 3;
    } else if(numbers % 2 === 0){
        result = 2;
    } else {
        console.log(`Not divisible`)
    }
    if(result){
        console.log(`The number is divisible by ${result}`)
    }
}

division(31)