function employees(namesArr){

    let counter = {};

    namesArr.forEach(element => {
        counter[element] = element.length;
    });

    // for (const person of counter) {
    //     counter[person] = person.length;        
    // }

    for (const key in counter) {
        console.log(`Name: ${key} -- Personal Number: ${counter[key]}`)
    }
    
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )