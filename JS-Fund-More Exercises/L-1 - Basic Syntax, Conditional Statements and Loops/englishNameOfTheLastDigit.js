function englishNameOfTheLastDigit(number){

    let workNumber = String(number);
    let counter = 0;

    let nameNumber = ""; 
    let finalName = "";

    for(let n = 0; n < workNumber.length; n++){
        counter++;
    }
    
    for(let n = 0; n < workNumber.length; n++){
        if(n === (counter - 1)){
            nameNumber = (workNumber[n])
        }
    }
    switch(nameNumber){
        case "0": finalName = "zero" ; break;
        case "1": finalName = "one"; break;
        case "2": finalName = "two"; break;
        case "3": finalName = "three"; break;
        case "4": finalName = "four"; break;
        case "5": finalName = "five"; break;
        case "6": finalName = "six"; break;
        case "7": finalName = "seven"; break;
        case "8": finalName = "eight"; break;
        case "9": finalName = "nine"; break;
        }

    console.log(finalName)

}

englishNameOfTheLastDigit(0)