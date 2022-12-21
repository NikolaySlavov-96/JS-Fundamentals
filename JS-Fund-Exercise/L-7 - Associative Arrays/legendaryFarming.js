function legendaryFarming(inputArr){

    let comma = inputArr.split(' ');
    let inputLength = comma.length;

    const collectMaterials = {
        shards : 0, // shadowMourne
        fragments: 0, // valanyr
        motes: 0 // dragonWrath
    }
    let recucle = {};
    let isBooleanStop = false;

    let legendatyWin = '';
    
    for (let n = 0; n < inputLength; n += 2) {

        if(isBooleanStop){
            break;
        }

        let quantuty = Number(comma[n]);
        let matirials = comma[n + 1].toLowerCase();

        if(collectMaterials.hasOwnProperty(matirials)){
            collectMaterials[matirials] += quantuty;
        }
    
        if(!recucle.hasOwnProperty(matirials) && !collectMaterials.hasOwnProperty(matirials)){
            recucle[matirials] = quantuty;
        } else if(recucle.hasOwnProperty(matirials) && !collectMaterials.hasOwnProperty(matirials)){
            recucle[matirials] += quantuty;
        }

        if(collectMaterials[matirials] >= 250) { 
            switch(matirials){
                case 'shards': legendatyWin = 'Shadowmourne'; collectMaterials[matirials] -= 250; isBooleanStop = true ; break;
                case 'fragments': legendatyWin = 'Valanyr'; collectMaterials[matirials] -= 250; isBooleanStop = true ; break;
                case 'motes': legendatyWin = 'Dragonwrath'; collectMaterials[matirials] -= 250; isBooleanStop = true ; break;
            }
        }
    }
    let sumPrint = '';
    sumPrint += (`${legendatyWin} obtained!\n`);
    let sortLegendaty = Object.entries(collectMaterials).sort((a , b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    sortLegendaty.forEach(el => sumPrint +=(`${el[0]}: ${el[1]} \n`));
  

    let sortRecuclte = Object.entries(recucle).sort((a , b) => a[0].localeCompare(b[0]));
    sortRecuclte.forEach(el => sumPrint +=(`${el[0]}: ${el[1]} \n`))

    return sumPrint;
}

// legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
console.log(legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'))

// s4upen test zaradi powe4e ot 1 broika koqto e 250