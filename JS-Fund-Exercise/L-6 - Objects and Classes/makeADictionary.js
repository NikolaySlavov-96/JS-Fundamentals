function makeADictionary(arrayJsons){

    let finalDictionary = {};

    arrayJsons.forEach(line => {
        let currentLine = JSON.parse(line);

        finalDictionary = Object.assign(finalDictionary , currentLine);
    });   

   let sortDef = Object.keys(finalDictionary);
   sortDef.sort((a , b) => a.localeCompare(b));

    for (const line of sortDef) {
        console.log(`Term: ${line} => Definition: ${finalDictionary[line]}`)
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )