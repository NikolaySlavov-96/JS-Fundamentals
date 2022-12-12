function studentInformation(name, age, grade){

    let nameStudent = name;
    let ageStudent = age;
    let gradeStudent = grade;

    console.log(`Name: ${nameStudent}, Age: ${ageStudent}, Grade: ${(gradeStudent).toFixed(2)}`);
}

studentInformation("John" , 15 , 5.54678)