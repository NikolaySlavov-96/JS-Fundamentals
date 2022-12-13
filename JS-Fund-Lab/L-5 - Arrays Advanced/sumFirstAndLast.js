function sumFirstAndLast(arrAll){

    let firstElement = Number(arrAll.shift());
    let lastElement = Number(arrAll.pop());

    console.log(firstElement + lastElement)
}

sumFirstAndLast(['20', '30', '40'])