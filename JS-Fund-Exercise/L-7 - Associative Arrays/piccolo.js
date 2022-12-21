function piccolo(carArr){

    let arr = [];
    let objCarNumber = {};

    carArr.forEach(element => {
        let name = element.split(`, `)
        arr.push(name);
    });

    arr.forEach(el => {

        if(!objCarNumber.hasOwnProperty(el[1])){
            objCarNumber[el[1]] = el[0];
        }
        if(el[0] === 'OUT'){
            delete objCarNumber[el[1]];
        }
    })

    let sortNumber = Object.keys(objCarNumber).sort((a , b) => a.localeCompare(b));

    if(sortNumber.length === 0){
        console.log(`Parking Lot is Empty`)
    } else {
        sortNumber.forEach(el => console.log(el))
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])