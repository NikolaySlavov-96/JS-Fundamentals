function bonusScoringSystem(arr){

    let quantityStudent = Number(arr.shift());
    let quantityLecture = Number(arr.shift());
    let addBonus = Number(arr.shift());

    let attendanceEach = arr.shift();

    let maxResult = 0;
    let maxStudent = 0;

    for (let n = 0; n < quantityStudent; n++) {

        let temp = Number(attendanceEach);

        let bonus = (temp / quantityLecture)
        let totalBonus = bonus * (5 + addBonus);

        if(maxResult < totalBonus){
            maxResult = totalBonus;
            maxStudent = attendanceEach;
        }


        attendanceEach = arr.shift();

    }
    
    console.log(`Max Bonus: ${ Math.ceil(maxResult)}.`)
    console.log(`The student has attended ${maxStudent} lectures.`)
}

bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  )