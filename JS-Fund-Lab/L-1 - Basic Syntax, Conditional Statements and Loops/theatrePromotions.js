function theatrePromotions(dayOfWeek, agesFrom){

    let daysOfWeeks = dayOfWeek;
    
    let allPayPrice = 0;

    if(agesFrom >= 0 && agesFrom <= 18){
        switch(daysOfWeeks){
            case "Weekday": allPayPrice = 12; break;
            case "Weekend": allPayPrice = 15; break;
            case "Holiday": allPayPrice = 5; break;
        }
    } else if(agesFrom > 18 && agesFrom <= 64){
        switch(daysOfWeeks){
            case "Weekday": allPayPrice = 18; break;
            case "Weekend": allPayPrice = 20; break;
            case "Holiday": allPayPrice = 12; break;
        }
    } else if(agesFrom > 64 && agesFrom <= 122){
        switch(daysOfWeeks){
            case "Weekday": allPayPrice = 12; break;
            case "Weekend": allPayPrice = 15; break;
            case "Holiday": allPayPrice = 10; break;
        }
    } else {
        console.log(`Error!`)
    }
    if(allPayPrice !== 0){
        console.log(`${allPayPrice}$`)
    }
}

theatrePromotions("Weekday" ,42)