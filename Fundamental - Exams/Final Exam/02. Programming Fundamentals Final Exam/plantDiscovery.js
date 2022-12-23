function plantDiscovery(exInput){
 
    let allInfoForTask = exInput.slice(0);
    let sizeCollect = allInfoForTask.shift();
    let excebitionStore = {};

    //collect BeginData
    for(let n = 0; n < sizeCollect; n++){
        
        let [plant , rarity] = allInfoForTask.shift().split(`<->`);
        excebitionStore[plant] = {rarity , rating: []};
    }

    //Perform Command

    for (const line of allInfoForTask) {
        if(line === 'Exhibition') {
            break;
        }
        let [take , comma] = line.split(`: `);
        let [plant , rating] = comma.split(` - `);
        
        if(excebitionStore.hasOwnProperty(plant)){
            switch(take){
                case 'Rate': taskRate(plant , rating); break;
                case 'Update': taskUpdate(plant , rating); break;
                case 'Reset': taskReset(comma); break;
                default: console.log(`error`); break;
            }
        } else {
            console.log(`error`)
        }
    }

    //Sorted

    let sortedPlants = Object.keys(excebitionStore).sort((a , b) =>{
        excebitionStore[b].rarity - excebitionStore[a].rarity || 
        excebitionStore[b].rating - excebitionStore[a].rating
    })

    //print Result
    
    console.log(`Plants for the exhibition:`);
    for (const line of sortedPlants) {
        
        console.log(`- ${line}; Rarity: ${excebitionStore[line].rarity}; Rating: ${avgSum(excebitionStore[line].rating).toFixed(2)}`);
    }

    //OutTask

    function taskRate(plant , rating){
        rating = Number(rating)
        excebitionStore[plant].rating.push(rating);
    }

    function taskUpdate(plant , rarity){
        excebitionStore[plant].rarity = rarity;
    }

    function taskReset(take){
        excebitionStore[take].rating = [];
    }

    function avgSum(arr){
        if(!arr.length) return 0;
        return arr.reduce((a , b) => a + b, 0) / arr.length;

    }
}

plantDiscovery(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"])

//OutPut
// Plants for the exhibition:
// - Arnoldii; Rarity: 4; Rating: 0.00
// - Woodii; Rarity: 5; Rating: 7.50
// - Welwitschia; Rarity: 2; Rating: 7.00