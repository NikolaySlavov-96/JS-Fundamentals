function city(objects){

    for (const key of Object.keys(objects)) {

        console.log(`${key} -> ${objects[key]}`)

    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)