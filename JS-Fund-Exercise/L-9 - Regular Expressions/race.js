function race(array){

    let patterNumber = /[0-9]/g;
    let patterDifferent = /\b[\W]+/g;
    let patternName = /[A-Za-z]+/g;
    
    let names = array.shift().split(`, `);
    let allResult = {};

    names.forEach(names => {
        if(!allResult.hasOwnProperty(names)){
            allResult[names] = 0;
        }
    });

    for (const line of array) {
        if(line === 'end of race'){
            break;
        }

        let newLine = '';
        let names = '';
        let score = 0;

        if(line.search(patterDifferent)){
            newLine = line.replace(patterDifferent , '');
        }
        let resultName = newLine.match(patternName);
        let scorePoint = newLine.match(patterNumber)

        for (const name of resultName) {
            names += name;
        }
        for(const point of scorePoint){
            score += Number(point);
        }
        if(allResult.hasOwnProperty(names)){
            allResult[names] += score;
        }
    }
    let sort = Object.entries(allResult).sort((a , b) => b[1] - a[1]);

    console.log(`1st place: ${sort[0][0]}`)
    console.log(`2nd place: ${sort[1][0]}`)
    console.log(`3rd place: ${sort[2][0]}`)
}

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race'])