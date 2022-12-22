function nextDay(year , month , day){

    let days = day;
    if(year == 1){
        year = (`190${year}`)
    }
    
    if(days === 30 && month !== 12){
        month += 1;
        days = 1;
    } else {
        days++;
    }
    if(month === 12 && day === 30){
        year += 1;
        month = 1;
        days = 1;
    }
    console.log(`${year}-${month}-${days}`)
}

nextDay(1, 12, 24)