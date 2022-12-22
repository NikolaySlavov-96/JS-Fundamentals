function triangleArea(first , second , last){

    let firstSide = first;
    let secondSide = second;
    let thirdSide = last;

    let sumOf = (firstSide + secondSide + thirdSide) / 2;
    let finalPrint = Math.sqrt(sumOf * (sumOf - firstSide) * (sumOf - secondSide) * (sumOf - thirdSide))
    console.log(finalPrint)
}

triangleArea(2,
    3.5,
    4
    )