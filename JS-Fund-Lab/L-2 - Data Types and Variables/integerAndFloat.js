function integerAndFloat(first , second , third){

    let sumNumbers = first + second + third;

    let finalResult = Number.isInteger(sumNumbers);

    console.log(`${sumNumbers} - ${finalResult ? 'Integer' : 'Float'}`)
}

integerAndFloat(100, 200, 303)