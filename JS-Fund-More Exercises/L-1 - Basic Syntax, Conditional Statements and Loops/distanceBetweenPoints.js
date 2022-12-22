function distanceBetweenPoints(x1 , y1 , x2 , y2){

    let first = Math.abs(x1 - x2)
    let second = Math.abs(y1 - y2)

    let distance = Math.sqrt((first * first) + (second * second))

    console.log(distance)
}

// distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)
distanceBetweenPoints(2 , 4, 5, 0)