function partyTime(arraOfGuest){

    let vipList = [];
    let regularList = [];

    let command = arraOfGuest.shift();

    
    while(command !== 'PARTY'){
        
        if(isNaN(command[0])){
            regularList.push(command);
        } else if(!isNaN(command[0])) {
            vipList.push(command)
        }
        command = arraOfGuest.shift();
    }

    let allGuets = vipList.concat(regularList)

    arraOfGuest.forEach(element => {
        if(allGuets.includes(element)){
            let index = allGuets.indexOf(element);

            allGuets.splice(index , 1)
        }
    });
    console.log(allGuets.length);
    allGuets.forEach(el => {
        console.log(el);
    })
}

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
])