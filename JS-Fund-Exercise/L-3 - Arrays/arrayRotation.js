function arrayRotation(array , counters){

    let xcounter = array.length;
    let result = '';

    for(let n = 0; n < counters; n++){
        array.push(array[n]);
    }

    for(let pr = counters; pr < xcounter + counters; pr++){
        result += (`${array[pr]} `);
    }
    console.log(result)
}

arrayRotation([51, 47, 32, 61, 21], 2)