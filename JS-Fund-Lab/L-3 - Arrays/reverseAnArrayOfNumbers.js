function reverseAnArrayOfNumbers(quality , number){

    let counter = quality - 1;

    let repository = '';

    for(let n = counter; n >= 0; n--){
        repository += (`${number[n]} `);
    }
    console.log(repository)
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])