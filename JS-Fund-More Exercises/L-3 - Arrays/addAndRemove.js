function addAndRemove(arrays){

    let result = [];

    for(let n = 0; n < arrays.length; n++){
        if(arrays[n] === 'add'){
            result.push(n + 1);
        } else if(arrays[n] === 'remove') {
            result.pop()
        }
    }

    if(result.length === 0){
        console.log(`Empty`)
    } else {
        console.log(result.join(` `))
    }
}
// addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
// addAndRemove(['remove', 'add', 'add', 'add', 'add'])
// addAndRemove(['remove', 'remove', 'remove'])
// addAndRemove(['add'])
