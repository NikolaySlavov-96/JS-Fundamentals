function convertToObject(arrayJSON){

    let arrJS = JSON.parse(arrayJSON)

    for (const object of Object.keys(arrJS)) {
        
        console.log(`${object}: ${arrJS[object]}`)
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')