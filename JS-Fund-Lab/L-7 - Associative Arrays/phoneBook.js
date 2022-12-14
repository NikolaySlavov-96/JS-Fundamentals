function phoneBook(input){

    let book = {};

    input.forEach(element => {
        let [name , number] = element.split(` `)

        book[name] = number
    });

    for (const line in book) {
        console.log(`${line} -> ${book[line]}`)
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])