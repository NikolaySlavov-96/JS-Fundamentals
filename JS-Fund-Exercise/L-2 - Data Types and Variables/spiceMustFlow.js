function spiceMustFlow(spice){

    let spiceMust = spice;
    const consumes = 26;
    const dayLimit = 100;

    let counterDay = 0;
    let workHouse = 0;

    let isBooleand = false;

    while(!isBooleand){
        if(spiceMust < dayLimit){
            isBooleand = false;
            if(workHouse > 0){
                workHouse -= consumes;
            }
            break;
        }
        counterDay++;
        workHouse += spiceMust - consumes;
        spiceMust -= 10;
    }
    console.log(counterDay)
    console.log(workHouse)
}

// spiceMustFlow(111)
// spiceMustFlow(450)
spiceMustFlow(101)