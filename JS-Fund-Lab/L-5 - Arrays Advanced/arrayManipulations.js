function arrayManipulations(array){

    let arrManipulation = array.shift().split(` `);
    let modifyLength = array.length;
    
    for(let n = 0; n < modifyLength; n++){
        let modifyCommand = array.shift().split(` `);

        switch(modifyCommand[0]){
            case 'Add': arrManipulation.push(modifyCommand[1]) ;break;
            case 'Remove':
                while(arrManipulation.includes(modifyCommand[1])){
                    let index = arrManipulation.indexOf(modifyCommand[1]);
                    arrManipulation.splice(index, 1);
                }
            break;
            case 'RemoveAt': arrManipulation.splice(modifyCommand[1], 1) ;break;
            case 'Insert': 
                let numberAdd = Number(modifyCommand[1]);
                let indexToAdd = Number(modifyCommand[2]);
                arrManipulation.splice(indexToAdd , 0 , numberAdd)

            break;
        }

    }
    console.log(arrManipulation.join(` `))
}

arrayManipulations(['4 19 2 53 6 43 2',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)
// arrayManipulations(['6 12 2 65 6 42',
// 'Add 8',
// 'Remove 12',
// 'RemoveAt 3',
// 'Insert 6 2'])