function garage(inputArr){

    let garageObj = {};

    for (const line of inputArr) {

        let [numberGarage , all] = line.split(` - `);
        let [color , fuelType , manufacture] = all.split(`, `);
        if(!garageObj.hasOwnProperty(numberGarage)){
            garageObj[numberGarage] = [];
        }
        let temporary = {};
        if(color !== undefined && color.length > 1){
            let [name , colors] = color.split(`: `);
            temporary[name] = colors
        }

        if(fuelType !== undefined && fuelType.length > 1){
            let [name , fuel] = fuelType.split(`: `);
            temporary[name] = fuel;
        }

        if(manufacture !== undefined && manufacture.length > 1){
            let [name , manFactur] = manufacture.split(`: `);
            temporary[name] = manFactur;
        }
        garageObj[numberGarage].push(temporary);
    }

    for (const key in garageObj) {
        console.log(`Garage № ${key}`)
        for (const line of garageObj[key]) {
            let temporaryPrint = '';

            let lengthLine = Object.keys(line).length;
            let counter = 0
            for (const key in line) {
                counter++;

                if(counter < (lengthLine)){
                    temporaryPrint += (`${key} - ${line[key]}, `);
                } else {
                    temporaryPrint += (`${key} - ${line[key]} `);
                }

            }
            console.log(`--- ${temporaryPrint}`)
            
        }
    }
}

garage(['1 - color: blue, fuel type: diesel',
'1 - color: red, manufacture: Audi',
'2 - fuel type: petrol',
'4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])