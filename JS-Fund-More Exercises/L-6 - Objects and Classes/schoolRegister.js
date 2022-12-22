function schoolRegister(arrayName){

    let mass = {};

    arrayName.forEach(names => {

        let [name , grade , avgGrade] = names.split(`,`)
        name = name.split(`Student name: `)[1];
        grade = Number(grade.split(` `)[2]) + 1;
        avgGrade = Number(avgGrade.split(`Graduated with an average score: `)[1]);

        if(avgGrade > 3){
            if(!mass.hasOwnProperty(grade)){
                mass[grade] = [];
            }

            mass[grade].push({name , avgGrade});
        }
    });

    let sortGrade = Object.keys(mass).sort((a , b) => a - b);

    for (const grade of sortGrade) {

        let studentName = mass[grade];

        console.log(`${grade} Grade`);
        console.log(`List of students: ${studentName.map(stu => stu.name).join(`, `)}`);
        console.log(`Average annual score from last year: ${average(studentName.map(gr => gr.avgGrade)).toFixed(2)}`);
        console.log(``);
    }

    function average(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
}

schoolRegister([
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
    )