function arrayManipulator(editArr , command){

    let commandLength = command.length;

    // console.log(commandLength)

    let printResult = '';

    for(let n = 0; n < commandLength; n++){
        let condition = command[n]
        let arrCondition = condition.split(' ')

        switch(arrCondition[0]){
            case 'add': 
                editArr.splice(arrCondition[1] , 0 , Number(arrCondition[2])); 
            break;
            case 'addMany': 
                let index = Number(arrCondition[1]);
                let lengthArr = (arrCondition.length - 1)
                for(let q = lengthArr; q > 1 ; q--){
                    editArr.splice(index , 0, Number(arrCondition[q]));
                }
            break;
            case 'contains':
                let arrNumber = arrCondition[1];
                console.log(editArr.indexOf(+arrNumber));
            break;
            case 'remove': editArr.splice(arrCondition[1], 1); break;
            case 'shift': 
                    for(let z = 0; z < arrCondition[1]; z++){
                        let first = editArr.shift();
                        editArr.push(first);
                    }
            break;
            case 'sumPairs':
                let arrLength = Math.floor(editArr.length / 2);
                for(let r = 0; r < arrLength; r++){
                    let temporarySum = Number(editArr[r]) + Number((editArr[r + 1]))  
                    editArr.splice(r , 2 , temporarySum);
                }
            break;
            case 'print': printResult = (editArr.join(`, `)); break;
        }
    }

    console.log(`[ ${printResult} ]`)
}

// arrayManipulator([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])  
// -> yes ?

arrayManipulator([1, 2, 4, 5, 6, 7],
    ["add 1 8", "contains 1", "contains -3", "print"])
//  -> yes

// arrayManipulator([2, 2, 4, 2, 4],
// ["add 1 4", "sumPairs", "print"])
// -> yes

// arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
// ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])
// -> yes
