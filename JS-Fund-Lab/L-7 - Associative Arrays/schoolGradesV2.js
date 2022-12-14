function schoolGrades(arrayGrade){

    let objectGrade = {};

    arrayGrade.forEach(element => {
        let all = element.split(` `);
        let name = all.shift()
        let grade = all
        let sizeElement = all.length;
        let finalGrade = 0;

        let counter = 0;
        let temporary = 0;
        grade.forEach(element => {
            counter++;
            temporary += Number(element);
        })

        if(objectGrade.hasOwnProperty(name)){
            counter += objectGrade[name][0];
            temporary += objectGrade[name][1];
            objectGrade[name] = [];
            objectGrade[name].push(counter , temporary);
        } else {
            objectGrade[name] = [];
            objectGrade[name].push(counter , temporary);
        }
    });

    for (const line in objectGrade) {
        let [counter , temporary] = objectGrade[line];

        objectGrade[line] = (temporary / counter).toFixed(2);
    }

    let sortedNameGrade = Object.entries(objectGrade);

    sortedNameGrade.sort(([keyA , valueA] , [keyB , valueB]) => keyA.localeCompare(keyB));

    sortedNameGrade.forEach(element => {

        let [name , grade] = element;

        console.log(`${name}: ${grade}`)
    })
}

// schoolGrades(['Lilly 4 6 6 5',
// 'Tim 5 6',
// 'Tammy 2 4 3',
// 'Tim 6 6'])
// schoolGrades(['Lilly 4 6 6 5',
// 'Tim 5',
// 'Tammy 2 4 3',
// 'Tim 6 6',
// 'Lilly 4 6'])
schoolGrades(['Lilly 4 6 6 5',
'Lilly 4 6'])