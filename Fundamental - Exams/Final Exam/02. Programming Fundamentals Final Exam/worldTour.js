function worldTour(arrayInput){

    let beginStatys = arrayInput.shift();
    let startTrawel = arrayInput.shift();

    while(startTrawel !== 'Travel'){
        let [firstElement , secondElement , lastElement] = startTrawel.split(`:`);

        switch(firstElement){
            case 'Add Stop': commandAdd(secondElement , lastElement); break;
            case 'Remove Stop': commandRemove(secondElement , lastElement); break;
            case 'Switch': commandSwitch(secondElement , lastElement); break;
            default: console.log(``)
        }
        startTrawel = arrayInput.shift();
    }



    function commandAdd(index , newDestination){

        let beforNew = beginStatys.substring(0 , index);
        let afterNew = beginStatys.substring(index);

        beginStatys = beforNew.concat(newDestination).concat(afterNew);
        console.log(beginStatys);
    }

    function commandRemove(startIndex , endIndex){
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        
        if(beginStatys[startIndex] && beginStatys[endIndex]){
            let beforCut = beginStatys.substring(0 , startIndex);
            let afterCut = beginStatys.substring(endIndex + 1);
    
            beginStatys = beforCut.concat(afterCut);

        }
        console.log(beginStatys)
    }

    function commandSwitch(oldDestination , newDestination){

        beginStatys = beginStatys.replace(oldDestination , newDestination);
        console.log(beginStatys)
    }

    console.log(`Ready for world tour! Planned stops: ${beginStatys}`)
}

worldTour((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]))