function houseParty(arrParty){

    let arrPartyLength = arrParty.length;

    let goingParty = [];

    for(let n = 0; n < arrPartyLength; n++){

        let condition = arrParty.shift().split(` `)

        if(condition[2] === 'not'){
            if(goingParty.includes(condition[0])){
                let index = goingParty.indexOf(condition[0])
                goingParty.splice(index, 1)

            } else {

                console.log(`${condition[0]} is not in the list!`)
            }

        } else {
            if(goingParty.includes(condition[0])){

                console.log(`${condition[0]} is already in the list!`)

            } else {

                goingParty.push(condition[0]);
            }

        }
    }

    for (const element of goingParty) {
        
        console.log(element)
    }

}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)