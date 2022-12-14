function schoolGrades(arrayGrade){

    let objectGrade = {};

    arrayGrade.forEach(element => {
        let all = element.split(` `);
        let name = all.shift()
        let grade = all

        let counter = 0;
        let temporary = 0;
        grade.forEach(element => {
            counter++;
            temporary += Number(element);
        })
        
        temporary /= counter;

        if(objectGrade.hasOwnProperty(name)){
            temporary = ((objectGrade[name] + temporary) / 2);
        }

        objectGrade[name] = temporary;
    });

    let sortedNameGrade = Object.entries(objectGrade);

    sortedNameGrade.sort(([keyA , valueA] , [keyB , valueB]) => keyA.localeCompare(keyB));

    sortedNameGrade.forEach(element => {

        let [name , grade] = element;

        console.log(`${name}: ${grade.toFixed(2)}`)
    })
}

// schoolGrades(['Lilly 4 6 6 5',
// 'Tim 5 6',
// 'Tammy 2 4 3',
// 'Tim 6 6'])
schoolGrades(['Lilly 4 6 6 5',
'Tim 5',
'Tammy 2 4 3',
'Tim 6 6',
'Lilly 4 6'])