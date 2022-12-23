function wildZoo(array){

    const animalsFerms = {};

    for (const line of array) {

        if(line === 'EndDay'){
            break;
        }

        const [command , ...other] = line.split(`: `);

        switch(command){
            case 'Add': addFunction(other); break;
            case 'Feed': feedFunction(other); break;
        }
    }

    function addFunction(array){

        let [nameAnimal , needFood , nameFerm] = array.shift().split(`-`);
        needFood = Number(needFood);

        if(!animalsFerms.hasOwnProperty(nameAnimal)){
            animalsFerms[nameAnimal] = {needFood: 0 , nameFerm};
        }

        animalsFerms[nameAnimal].needFood += needFood;
    }

    function feedFunction(arrya){

        let [nameAnimal , food] = arrya.shift().split(`-`);
        food = Number(food);

        if(animalsFerms.hasOwnProperty(nameAnimal)){
            animalsFerms[nameAnimal].needFood -= food;
            
            if(animalsFerms[nameAnimal].needFood <= 0){
                console.log(`${nameAnimal} was successfully fed`);
                delete animalsFerms[nameAnimal];
            }
        }
    }

    console.log(`Animals:`);

    const newObj = {};

    for (const animal in animalsFerms) {
        console.log(` ${animal} -> ${animalsFerms[animal].needFood}g`)
        if(!newObj.hasOwnProperty(animalsFerms[animal].nameFerm)){
            newObj[animalsFerms[animal].nameFerm] = 0;
        }
        newObj[animalsFerms[animal].nameFerm]++
    }

    console.log(`Areas with hungry animals:`)
    for (const ferm in newObj) {
      
        console.log(` ${ferm}: ${newObj[ferm]}`)
    }
}

// wildZoo(["Add: Bonie-3490-RiverArea",
// "Add: Sam-5430-DeepWoodsArea",
// "Add: Bonie-200-RiverArea",
// "Add: Maya-4560-ByTheCreek",
// "Feed: Maya-2390",
// "Feed: Bonie-3500",
// "Feed: Johny-3400",
// "Feed: Sam-5500",
// "EndDay"])

// wildZoo(["Add: Jamie-600-WaterfallArea",
// "Add: Maya-6570-WaterfallArea",
// "Add: Adam-4500-ByTheCreek",
// "Add: Bobbie-6570-WaterfallArea",
// "Feed: Jamie-2000",
// "Feed: Adam-2000",
// "Feed: Adam-2500",
// "EndDay"])

wildZoo(["Add: Adam-4500-ByTheCreek",
"Add: Maya-7600-WaterfallArea",
"Add: Maya-1230-WaterfallArea",
"Feed: Jamie-2000",
"EndDay"])