function guineaPig(array){

    let copyArray = array.splice(0)

    let [qualityFoodInKg , qualityHayInKg , qualityCoverInKg , qualityGuineaInKg] = copyArray;

    // let qualityFoodInKg = copyArray.shift();
    // let qualityHayInKg = copyArray.shift();
    // let qualityCoverInKg = copyArray.shift();
    // let qualityGuineaInKg = copyArray.shift();

    let qualityFoodGr = qualityFoodInKg * 1000;
    let qualityHayGr = qualityHayInKg * 1000;
    let qualityCoverGr = qualityCoverInKg * 1000;
    let qualityGuineaGr = qualityGuineaInKg * 1000;
    let isFalse = true;

    for(let n = 1; n <= 30; n++){
        qualityFoodGr -= 300;

        if(n % 2 === 0 && n !== 0){
            let percentHay = qualityFoodGr * 0.05;
            // console.log(percentHay);
            qualityHayGr -= percentHay;
        }

        if(n % 3 === 0 && n !== 0){
            qualityCoverGr -= (qualityGuineaGr * 0.3333);
        }
        
        if(qualityFoodGr <= 0 || qualityHayGr <= 0 || qualityCoverGr <= 0){
            isFalse = false;
            return (`Merry must go to the pet store!`)
        }
    }

    if(isFalse){
        return (`Everything is fine! Puppy is happy! Food: ${(qualityFoodGr / 1000).toFixed(2)}, Hay: ${(qualityHayGr / 1000).toFixed(2)}, Cover: ${(qualityCoverGr / 1000).toFixed(2)}.`)
    }

}

console.log(guineaPig(["10", "5", "5.2", "1"]))
console.log(guineaPig(["1", "1.5", "3", "1.5"]))
console.log(guineaPig(["9","5","5.2","1"]));