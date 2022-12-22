function cone(radius , height){

    // v= p*r2*h / 3
    let sumVolume = (Math.PI * (radius * radius) * height) / 3;

    // area = p * r(r + h2 + r2)
    let sumArea = ((Math.PI * radius * (radius + Math.sqrt((height * height) + (radius * radius)))))

    console.log(`volume = ${(sumVolume).toFixed(4)}`)
    console.log(`area = ${(sumArea.toFixed(4))}`)
}

cone(3,5)