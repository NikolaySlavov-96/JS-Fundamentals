function pirates(arrya){

    const storeInfo = {};
    let line = arrya.shift();
    let countryCity = 0;

    while(line !== 'Sail' && line.includes(`||`)){
    
        let [city , people , gold] = line.split(`||`);
        people = Number(people);
        gold = Number(gold);
        
        if(!storeInfo.hasOwnProperty(city)){
            countryCity++;
            storeInfo[city] = {people: 0 , gold: 0};
        }

        storeInfo[city].people += people;
        storeInfo[city].gold += gold;
        

        line = arrya.shift();
    }

    line = arrya.shift();

    while(line !== 'End'){

        let [instruction , city , ...oth] = line.split(`=>`);

        switch(instruction){
            case 'Prosper': prosper(city , oth); break;
            case 'Plunder': plunder(city , oth); break;
        }

        line = arrya.shift();
    }

    // print 
    if(countryCity > 0){
        console.log(`Ahoy, Captain! There are ${countryCity} wealthy settlements to go to:`);
        for (const city in storeInfo) {
            const edit = storeInfo[city];
            console.log(`${city} -> Population: ${edit.people} citizens, Gold: ${edit.gold} kg`);
            
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }

    // help Function

    function prosper(city , othInfo){

        const golds = Number(othInfo[0]);

        if(golds < 0){
            return console.log(`Gold added cannot be a negative number!`);
        }

        storeInfo[city].gold += golds;
        console.log(`${golds} gold added to the city treasury. ${city} now has ${storeInfo[city].gold} gold.`)
    }

    function plunder(city , othInfo){
        
        const people = Number(othInfo[0]);
        const golds = Number(othInfo[1]);

        storeInfo[city].gold -= golds;
        storeInfo[city].people -= people;

        console.log(`${city} plundered! ${golds} gold stolen, ${people} citizens killed.`)
        
        const cityGold = storeInfo[city].gold;
        const cityPeople = storeInfo[city].people;
        if(cityGold <= 0 || cityPeople <= 0){
            console.log(`${city} has been wiped off the map!`);
            countryCity--;
            delete storeInfo[city];
        }
    }
}

pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])

// pirates(["Tortuga||345000||1250",
// "Santo Domingo||240000||630",
// "Havana||410000||1100",
// "Sail",
// "Plunder=>Tortuga=>75000=>380",
// "Prosper=>Santo Domingo=>180",
// "End"])