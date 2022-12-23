function destinationMapper(input){

    let patternCity = /([=|\/])(?<city>[A-Z][A-Za-z]{2,})\1/g;
    let printResult = [];
    let allTravelPoint = 0;
    let allValidDestination = input.matchAll(patternCity);


    for(const destination of allValidDestination){
        let travelDestination = destination.groups.city;
        allTravelPoint += travelDestination.length
        printResult.push(travelDestination)
    }

    console.log(`Destinations: ${printResult.join(`, `)}`)
    console.log(`Travel Points: ${allTravelPoint}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")