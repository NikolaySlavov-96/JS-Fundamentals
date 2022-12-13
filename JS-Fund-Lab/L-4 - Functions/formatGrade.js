function formatGrade(grade){

    let nameGrade = '';

    if(grade < 3.00){
        nameGrade = 'Fail'
        grade = 2;
    } else if(grade < 3.50){
        nameGrade = 'Poor'
    } else if(grade < 4.50){
        nameGrade = 'Good'
    } else if(grade < 5.50){
        nameGrade = 'Very good'
    } else {
        nameGrade = 'Excellent'
    }

    if(grade < 3){
        return (`${nameGrade} (${grade})`)
    } else {
        return (`${nameGrade} (${grade.toFixed(2)})`)
    }
}

let descriptionGrade = formatGrade(2.33)

console.log(descriptionGrade)