function travelTime(array){

    let collectObject = {};

    array.forEach(element => {
        let [country , city , price] = element.split(` > `);
        
        if(!collectObject.hasOwnProperty(country)){
            collectObject[country] = {};
        }

        if(!collectObject[country].hasOwnProperty(city)){
            collectObject[country][city] = price;
        }
        let oddPrice = collectObject[country][city];

        if(oddPrice > price){
            collectObject[country][city] = price
        }
    });

    let sortedTask = Object.entries(collectObject).sort((a , b) => a[0].localeCompare(b[0]));

    sortedTask.forEach(allInfo => {
        let [country , array] = allInfo;
        let sort = Object.entries(array).sort((a , b) => a[1] - b[1]);

        let temporary = (`${country} -> `)
        sort.forEach(printInfo => {
            temporary += (`${printInfo[0]} -> ${printInfo[1]} `)
        });
        console.log(temporary);
    });

}

// travelTime([
//     "Bulgaria > Sofia > 500",
//     "Bulgaria > Sopot > 800",
//     "France > Paris > 2000",
//     "Albania > Tirana > 1000",
//     "Bulgaria > Sofia > 200"
//     ])

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ])