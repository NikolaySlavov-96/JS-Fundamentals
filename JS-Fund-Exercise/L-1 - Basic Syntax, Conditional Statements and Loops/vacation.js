function vacation(people, typeGroup, typeDay){

    let countryPeople = people;
    let typeGroupDelivery = typeGroup;
    let typeDayOfWeek = typeDay;

    let allPayPrice = 0;

    switch(typeGroupDelivery){
        case "Students":
            switch(typeDayOfWeek){
                case "Friday": allPayPrice = countryPeople * 8.45; break;
                case "Saturday": allPayPrice = countryPeople * 9.80; break;
                case "Sunday": allPayPrice = countryPeople * 10.46; break;
            }
            if(countryPeople >= 30){
                allPayPrice *= 0.85;
            }
        break;
        case "Business":
            if(countryPeople >= 100){
                countryPeople -= 10;
            }
            switch(typeDayOfWeek){
                case "Friday": allPayPrice = countryPeople * 10.90; break;
                case "Saturday": allPayPrice = countryPeople * 15.60; break;
                case "Sunday": allPayPrice = countryPeople * 16; break;
            }
        break;
        case "Regular":
            switch(typeDayOfWeek){
                case "Friday": allPayPrice = countryPeople * 15; break;
                case "Saturday": allPayPrice = countryPeople * 20; break;
                case "Sunday": allPayPrice = countryPeople * 22.50; break;
            }
            if(countryPeople >= 10 && countryPeople <= 20){
                allPayPrice *= 0.95;
            }
        break;
    }
    console.log(`Total price: ${allPayPrice.toFixed(2)}`)
}
vacation(40,
    "Regular",
    "Saturday"
    )