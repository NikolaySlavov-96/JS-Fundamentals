function train(arr){

    let wagons = arr.shift().split(` `).map(Number)
    let maxWagonSize = arr.shift();

    let lengthArr = arr.length;

    for(let n = 0; n < lengthArr; n++){

        let command = arr[n].split(` `);

        if(command[0] === 'Add'){
            wagons.push(Number(command[1]));
        } else {
            for(let q = 0; q < wagons.length; q++){
                if(Number(wagons[q]) + Number(command[0]) <= maxWagonSize){
                    wagons[q] += Number(command[0]);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(` `))
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])