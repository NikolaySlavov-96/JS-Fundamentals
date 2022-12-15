function leapYear(years){

    let printString = "";
    let isBooleav = (years % 4 === 0 && years % 100 !== 0) || years % 400 === 0;

    if(isBooleav){
        printString = "yes";
    } else {
        printString = "no";
    }

    console.log(printString);
}

leapYear(1984)