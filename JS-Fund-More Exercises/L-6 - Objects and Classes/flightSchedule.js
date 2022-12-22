function flightSchedule(arrFlight){

    let allFight = arrFlight[0];
    let commandFlight = arrFlight[1];
    let commandPrint = arrFlight[2];
    
    let allFly = {};
    let index = 0

    allFight.forEach((element) => {
        let [flyData , flyName] = element.split(` `);

        allFly[flyData] = {Destination: flyName , Status: 'Ready to fly'}

    });

    commandFlight.forEach(element => {
        let [flyData , status] = element.split(` `);

        if(allFly.hasOwnProperty(flyData)){
            allFly[flyData].Status = status;
        }
    })

    for (const key in allFly) {
        
        if(allFly[key].Status === commandPrint[0]){
            console.log(allFly[key])
        }
    }
}

flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
)