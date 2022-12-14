function matchDates(arr){

    let paternLetter = /\b(?<days>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;

    let editArr = arr.shift();

    let results = editArr.matchAll(paternLetter);

    for (const result of results) {
        console.log(`Day: ${result.groups.days}, Month: ${result.groups.month}, Year: ${result.groups.year}`)
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])