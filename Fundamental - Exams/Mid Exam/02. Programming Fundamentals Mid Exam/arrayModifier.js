function arrayModifier(oneArray){
    
    let editArray = oneArray[0].split(' ');
    oneArray.shift();
    let arrayAfterLength = oneArray.length - 1;

    let beginFirst = 0;
    let beginSecond = 0;
    let temporary = 0;

    for(let n = 0; n < arrayAfterLength; n++){
        editArray.join(` `).toString()
        let command = oneArray[n].split(' ');
        switch(command[0]){
            case 'swap':
                beginFirst = editArray[command[1]];
                beginSecond = editArray[command[2]];
                temporary = beginFirst;
                editArray[command[1]] = beginSecond;
                editArray[command[2]] = temporary;
            break;
            case 'multiply':
                beginFirst = editArray[command[1]];
                beginSecond = editArray[command[2]];
                temporary = beginFirst * beginSecond
                editArray[command[1]] = temporary;
                // editArray[command[2]] = beginSecond;
            break;
            case 'decrease':
                for(let q = 0; q < editArray.length; q++){
                    temporary = editArray[q]
                    editArray[q] = temporary - 1;
                }
        }
    }
    console.log(editArray.join(', '))
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]
  )