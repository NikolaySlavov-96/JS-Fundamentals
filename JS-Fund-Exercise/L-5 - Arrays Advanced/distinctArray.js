function distinctArray(arr){

    let printResult = [];
    
    for(let n = 0; n < arr.length; n++){
        if(!printResult.includes(arr[n])){
            printResult.push(arr[n]);
        }
    }

    console.log(printResult.join(` `))

}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])