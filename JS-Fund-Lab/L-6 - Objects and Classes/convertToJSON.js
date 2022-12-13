function convertToJSON(begin , second , last){

    let obj = {
        name: begin,
        lastName: second,
        hairColor: last,
    }

    let converter = JSON.stringify(obj);
    
    console.log(converter)
}

convertToJSON('George', 'Jones', 'Brown')