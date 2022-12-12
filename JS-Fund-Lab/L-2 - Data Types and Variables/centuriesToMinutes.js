function centuriesToMinutes(centuries){

    let sumYears = centuries * 100;
    let sumDays = Math.trunc(sumYears * 365.2422);
    let sumHours = sumDays * 24;
    let sumMinutes = sumHours * 60;

    console.log(`${centuries} centuries = ${sumYears} years = ${sumDays} days = ${sumHours} hours = ${sumMinutes} minutes`)
}

centuriesToMinutes(5)