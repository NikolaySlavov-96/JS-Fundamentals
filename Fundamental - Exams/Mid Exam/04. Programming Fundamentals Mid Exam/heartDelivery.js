function heartDelivery(array){

    let house = array.shift().split(`@`);
    let jump = array;
    let currentIndex = 0;
    
    for (const element of jump) {

        if(element == 'Love!'){
            break;
        }
        
        let [condition , quantity] = element.split(` `);

        let houseLength = house.length;
        let cruise = Number(quantity);
        
        currentIndex += cruise;
    
        if(houseLength <= currentIndex){
            currentIndex = 0
        }
    
        if(house[currentIndex] === 0){
            console.log(`Place ${currentIndex} already had Valentine's day.`);
        } else {
            house[currentIndex] -= 2;
            if(house[currentIndex] === 0){
                console.log(`Place ${currentIndex} has Valentine's day.`);
            }
        }
    }

    console.log(`Cupid's last position was ${currentIndex}.`);

    let isSuccessful = false;
    let counter = 0;

    for (const hou of house) {
        if(hou !== 0){
            isSuccessful = true;
            counter++;
        }
    }
    
    if(isSuccessful === true){
        console.log(`Cupid has failed ${counter} places.`);
    } else {
        console.log(`Mission was successful.`)
    }
}

heartDelivery(["2@4@2","Jump 2","Jump 2","Jump 8","Jump 3","Jump 1","Love!"])
