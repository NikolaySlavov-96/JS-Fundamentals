function formatGrade(grade){
    let result = '';
    let resultGrade = '';
    let isFail = false;
 
    if( grade < 3.00){
        grade = 2;
        isFail = true;
        resultGrade = 'Fail';
    } else if( grade < 3.50){
        resultGrade = 'Poor';
    } else if( grade < 4.50){
        resultGrade = 'Good';
    } else if( grade < 5.50){
        resultGrade = 'Very good';
    } else if( grade >= 5.50 ){
        resultGrade = 'Excellent';
    }
    if(!isFail){
    result = `${resultGrade} (${grade.toFixed(2)})`;
    return result;
    } else{
        result = `${resultGrade} (${grade})`;
    return result;
    }
}

let result = formatGrade(5.50)

console.log(result)